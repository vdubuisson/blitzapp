import { AnnouncementTypes } from '@/current-game/announcements/announcement-types';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { Announcer } from '@/current-game/announcements/announcer';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { DeathsToAnnounceStore } from '@/current-game/death/deaths-to-announce/deaths-to-announce-store';
import { KnownDeathsStore } from '@/current-game/death/known-deaths/known-deaths-store';
import { isKilledByInnocents } from '@/utils/roles.utils';
import { inject, Injectable } from '@angular/core';
import { StatusHandlersManager } from '../handlers/status/status-handlers-manager';
import { RoleHandlersManager } from '@/game-handlers/roles/role-handlers-manager';

@Injectable({
  providedIn: 'root',
})
export class DeathHandler {
  private readonly announcer = inject(Announcer);
  private readonly roleHandlersManager = inject(RoleHandlersManager);
  private readonly statusHandlersManager = inject(StatusHandlersManager);

  private readonly knownDeaths = inject(KnownDeathsStore).state;
  private readonly deathsToAnnounce = inject(DeathsToAnnounceStore).state;
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;

  /**
   * Retrieves the next round to be processed after a death occurs.
   * @returns The next round or undefined if there are no rounds left.
   */
  getNextAfterDeathRound(): Round | undefined {
    const afterDeathRound = this.afterDeathRoundQueue()[0];
    if (afterDeathRound !== undefined) {
      this.afterDeathRoundQueue.update((queue) => queue.slice(1));
    }
    return afterDeathRound;
  }

  /**
   * Resets the state of the DeathHandler.
   */
  reset(): void {
    this.knownDeaths.set(new Set());
    this.deathsToAnnounce.set([]);
    this.afterDeathRoundQueue.set([]);
  }

  /**
   * Handles the new deaths of players in the game.
   * @param players - The list of players in the game.
   * @returns The updated list of players after handling deaths.
   */
  handleNewDeaths(players: Player[]): Player[] {
    let newPlayers = this.statusHandlersManager
      .getHandler(PlayerStatus.DEVOURED)
      .triggerAction(players);

    let unknownDeadPlayers: Player[];
    do {
      unknownDeadPlayers = newPlayers.filter(
        (player) => player.isDead && !this.knownDeaths().has(player.id),
      );

      for (const deadPlayer of unknownDeadPlayers) {
        newPlayers = this.handlePlayerDeath(newPlayers, deadPlayer);
      }
    } while (unknownDeadPlayers.length > 0);

    return newPlayers;
  }

  /**
   * Announces the deaths of players in the game.
   */
  announceDeaths(): void {
    if (this.deathsToAnnounce().length > 0) {
      const deadByChevalier = this.deathsToAnnounce().find(
        (player) => player.killedBy === PlayerRole.CHEVALIER,
      );
      if (deadByChevalier !== undefined) {
        this.announcer.announce(AnnouncementTypes.WOLF_KILLED_BY_CHEVALIER, {
          playerName: deadByChevalier.name,
        });
      }
      this.announcer.announceDeaths(this.deathsToAnnounce());
      const deadAncienPlayer = this.deathsToAnnounce().find(
        (player) => player.role === PlayerRole.ANCIEN,
      );
      if (
        deadAncienPlayer !== undefined &&
        isKilledByInnocents(deadAncienPlayer)
      ) {
        this.announcer.announce(AnnouncementTypes.ANCIEN_KILLED_BY_INNOCENTS);
      }
      this.deathsToAnnounce.set([]);
    }
  }

  private handlePlayerDeath(players: Player[], deadPlayer: Player): Player[] {
    this.knownDeaths.update((knownDeaths) => {
      knownDeaths.add(deadPlayer.id);
      return new Set(knownDeaths);
    });
    this.deathsToAnnounce.update((deathsToAnnounce) => [
      ...deathsToAnnounce,
      deadPlayer,
    ]);
    const newPlayers = this.handlePlayerDeathStatuses(players, deadPlayer);
    return this.handlePlayerDeathRole(newPlayers, deadPlayer);
  }

  private handlePlayerDeathStatuses(
    players: Player[],
    deadPlayer: Player,
  ): Player[] {
    let newPlayers: Player[] = players;
    deadPlayer.statuses.forEach((status) => {
      newPlayers = this.statusHandlersManager
        .getHandler(status)
        .handleDeath(newPlayers, deadPlayer);
    });
    return newPlayers;
  }

  private handlePlayerDeathRole(
    players: Player[],
    deadPlayer: Player,
  ): Player[] {
    return this.roleHandlersManager
      .getHandler(deadPlayer.role)
      .handleDeath(players, deadPlayer);
  }
}
