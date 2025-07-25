import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { DeathsToAnnounceStore } from '@/stores/deaths-to-announce/deaths-to-announce.store';
import { KnownDeathsStore } from '@/stores/known-deaths/known-deaths.store';
import { isKilledByInnocents } from '@/utils/roles.utils';
import { inject, Injectable } from '@angular/core';
import { RoleHandlersService } from '../role-handlers/role-handlers.service';
import { StatusHandlersService } from '../status-handlers/status-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class DeathService {
  private readonly announcementService = inject(AnnouncementService);
  private readonly roleHandlersService = inject(RoleHandlersService);
  private readonly statusHandlersService = inject(StatusHandlersService);

  private readonly knownDeaths = inject(KnownDeathsStore).state;
  private readonly deathsToAnnounce = inject(DeathsToAnnounceStore).state;
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;

  /**
   * Retrieves the next round to be processed after a death occurs.
   * @returns The next round or undefined if there are no rounds left.
   */
  getNextAfterDeathRound(): RoundEnum | undefined {
    const afterDeathRound = this.afterDeathRoundQueue()[0];
    if (afterDeathRound !== undefined) {
      this.afterDeathRoundQueue.update((queue) => queue.slice(1));
    }
    return afterDeathRound;
  }

  /**
   * Resets the state of the DeathService.
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
    let newPlayers = this.statusHandlersService
      .getHandler(PlayerStatusEnum.DEVOURED)
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
        (player) => player.killedBy === PlayerRoleEnum.CHEVALIER,
      );
      if (deadByChevalier !== undefined) {
        this.announcementService.announce(
          AnnouncementEnum.WOLF_KILLED_BY_CHEVALIER,
          { playerName: deadByChevalier.name },
        );
      }
      this.announcementService.announceDeaths(this.deathsToAnnounce());
      const deadAncienPlayer = this.deathsToAnnounce().find(
        (player) => player.role === PlayerRoleEnum.ANCIEN,
      );
      if (
        deadAncienPlayer !== undefined &&
        isKilledByInnocents(deadAncienPlayer)
      ) {
        this.announcementService.announce(
          AnnouncementEnum.ANCIEN_KILLED_BY_INNOCENTS,
        );
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
    this.handlePlayerDeathStatuses(players, deadPlayer);
    return this.handlePlayerDeathRole(players, deadPlayer);
  }

  private handlePlayerDeathStatuses(
    players: Player[],
    deadPlayer: Player,
  ): Player[] {
    let newPlayers: Player[] = players;
    deadPlayer.statuses.forEach((status) => {
      newPlayers = this.statusHandlersService
        .getHandler(status)
        .handleDeath(newPlayers, deadPlayer);
    });
    return newPlayers;
  }

  private handlePlayerDeathRole(
    players: Player[],
    deadPlayer: Player,
  ): Player[] {
    return this.roleHandlersService
      .getHandler(deadPlayer.role)
      .handleDeath(players, deadPlayer);
  }
}
