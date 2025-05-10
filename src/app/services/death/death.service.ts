import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { DeathsToAnnounceStore } from '@/stores/deaths-to-announce/deaths-to-announce.store';
import { KnownDeathsStore } from '@/stores/known-deaths/known-deaths.store';
import { isKilledByInnocents } from '@/utils/roles.utils';
import { inject, Injectable } from '@angular/core';
import { RoleHandlersService } from '../role-handlers/role-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class DeathService {
  private readonly victoryHandlersService = inject(VictoryHandlersService);
  private readonly announcementService = inject(AnnouncementService);
  private readonly roleHandlersService = inject(RoleHandlersService);

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
    let newPlayers = [...players];
    newPlayers
      .filter((player) => player.statuses.has(PlayerStatusEnum.DEVOURED))
      .forEach((player) => {
        player.statuses.delete(PlayerStatusEnum.DEVOURED);
        player.isDead = true;
      });

    const deadPlayers = newPlayers.filter(
      (player) => player.isDead && !this.knownDeaths().has(player.id),
    );

    for (const deadPlayer of deadPlayers) {
      newPlayers = this.handlePlayerDeath(newPlayers, deadPlayer);
    }

    this.victoryHandlersService.removeUselessHandlers(players);

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
  ): void {
    if (
      deadPlayer.statuses.has(PlayerStatusEnum.CAPTAIN) &&
      deadPlayer.role !== PlayerRoleEnum.IDIOT
    ) {
      deadPlayer.statuses.delete(PlayerStatusEnum.CAPTAIN);
      this.afterDeathRoundQueue.update((queue) => [
        ...queue,
        RoundEnum.CAPITAINE,
      ]);
    }
    if (deadPlayer.statuses.has(PlayerStatusEnum.LOVER)) {
      const otherLivingLover = players.find(
        (player) =>
          player.statuses.has(PlayerStatusEnum.LOVER) &&
          player.id !== deadPlayer.id &&
          !player.isDead,
      );
      if (otherLivingLover !== undefined) {
        otherLivingLover.isDead = true;
        this.handlePlayerDeath(players, otherLivingLover);
      }
    }
    if (deadPlayer.statuses.has(PlayerStatusEnum.CHILD_MODEL)) {
      const enfantSauvage = players.find(
        (player) => player.role === PlayerRoleEnum.ENFANT_SAUVAGE,
      );
      if (enfantSauvage !== undefined && !enfantSauvage.isDead) {
        enfantSauvage.role = PlayerRoleEnum.LOUP_GAROU;
      }
    }
  }

  private handlePlayerDeathRole(
    players: Player[],
    deadPlayer: Player,
  ): Player[] {
    const roleHandler = this.roleHandlersService.getHandler(deadPlayer.role);
    if (roleHandler) {
      return roleHandler.handleDeath(players, deadPlayer);
    }
    return players;
  }
}
