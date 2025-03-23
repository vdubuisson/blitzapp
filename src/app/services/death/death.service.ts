import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/configs/innocents-power-removal-roles';
import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { StatusesService } from '@/services/statuses/statuses.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { DeathsToAnnounceStore } from '@/stores/deaths-to-announce/deaths-to-announce.store';
import { KnownDeathsStore } from '@/stores/known-deaths/known-deaths.store';
import { findLeftNeighbor } from '@/utils/neighbor.utils';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeathService {
  private readonly roundHandlersService = inject(RoundHandlersService);
  private readonly victoryHandlersService = inject(VictoryHandlersService);
  private readonly announcementService = inject(AnnouncementService);
  private readonly statusesService = inject(StatusesService);

  private readonly knownDeaths = inject(KnownDeathsStore).state;
  private readonly deathsToAnnounce = inject(DeathsToAnnounceStore).state;
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;
  private rolesToRemove: PlayerRoleEnum[] = [];

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
    this.rolesToRemove = [];
    this.afterDeathRoundQueue.set([]);
  }

  /**
   * Handles the new deaths of players in the game.
   * @param players - The list of players in the game.
   * @returns The updated list of players after handling deaths.
   */
  handleNewDeaths(players: Player[]): Player[] {
    this.rolesToRemove = [];
    const newPlayers = [...players];
    newPlayers
      .filter((player) => player.statuses.has(PlayerStatusEnum.DEVOURED))
      .forEach((player) => {
        player.statuses.delete(PlayerStatusEnum.DEVOURED);
        player.isDead = true;
      });

    newPlayers
      .filter((player) => player.isDead && !this.knownDeaths().has(player.id))
      .forEach((player) => this.handlePlayerDeath(newPlayers, player));

    if (this.rolesToRemove.length > 0) {
      this.roundHandlersService.removeHandlers(this.rolesToRemove);
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
        this.isAncienKilledByInnocents(deadAncienPlayer)
      ) {
        this.announcementService.announce(
          AnnouncementEnum.ANCIEN_KILLED_BY_INNOCENTS,
        );
      }
      this.deathsToAnnounce.set([]);
    }
  }

  private handlePlayerDeath(players: Player[], deadPlayer: Player): void {
    this.knownDeaths.update((knownDeaths) => {
      knownDeaths.add(deadPlayer.id);
      return new Set(knownDeaths);
    });
    this.deathsToAnnounce.update((deathsToAnnounce) => [
      ...deathsToAnnounce,
      deadPlayer,
    ]);
    this.handlePlayerDeathStatuses(players, deadPlayer);
    this.handlePlayerDeathRole(players, deadPlayer);
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

  private handlePlayerDeathRole(players: Player[], deadPlayer: Player): void {
    switch (deadPlayer.role) {
      case PlayerRoleEnum.LOUP_GAROU:
        if (
          players.filter(
            (player) =>
              [
                PlayerRoleEnum.LOUP_GAROU,
                PlayerRoleEnum.GRAND_MECHANT_LOUP,
              ].includes(player.role) && !player.isDead,
          ).length === 0
        ) {
          this.rolesToRemove.push(PlayerRoleEnum.LOUP_GAROU);
        }
        this.rolesToRemove.push(PlayerRoleEnum.GRAND_MECHANT_LOUP);
        break;
      case PlayerRoleEnum.CHASSEUR:
        this.afterDeathRoundQueue.update((queue) => [
          RoundEnum.CHASSEUR,
          ...queue,
        ]);
        break;
      case PlayerRoleEnum.SOEUR:
        if (
          players
            .filter((player) => player.role === PlayerRoleEnum.SOEUR)
            .every((player) => player.isDead)
        ) {
          this.rolesToRemove.push(PlayerRoleEnum.SOEUR);
        }
        break;
      case PlayerRoleEnum.FRERE:
        if (
          players
            .filter((player) => player.role === PlayerRoleEnum.FRERE)
            .every((player) => player.isDead)
        ) {
          this.rolesToRemove.push(PlayerRoleEnum.FRERE);
        }
        break;
      case PlayerRoleEnum.ANCIEN:
        if (this.isAncienKilledByInnocents(deadPlayer)) {
          this.statusesService.removePowersFromInnocents(players);
          this.rolesToRemove.push(...INNOCENTS_POWER_REMOVAL_ROLES);
        }
        break;
      case PlayerRoleEnum.CHEVALIER:
        if (deadPlayer.killedBy === PlayerRoleEnum.GRAND_MECHANT_LOUP) {
          players
            .find((player) => player.role === PlayerRoleEnum.GRAND_MECHANT_LOUP)
            ?.statuses.add(PlayerStatusEnum.RUSTY_SWORD);
        } else if (deadPlayer.killedBy === PlayerRoleEnum.LOUP_GAROU) {
          const chevalierIndex = players.indexOf(deadPlayer);
          const leftPlayer = findLeftNeighbor(players, chevalierIndex, true);
          if (leftPlayer !== undefined) {
            leftPlayer.statuses.add(PlayerStatusEnum.RUSTY_SWORD);
          }
        }
        break;
      case PlayerRoleEnum.BOUC:
        if (deadPlayer.killedBy === undefined) {
          this.afterDeathRoundQueue.update((queue) => [
            ...queue,
            RoundEnum.BOUC,
          ]);
        } else {
          this.rolesToRemove.push(PlayerRoleEnum.BOUC);
        }
        break;
      default:
        this.rolesToRemove.push(deadPlayer.role);
        break;
    }
  }

  private isAncienKilledByInnocents(player: Player): boolean {
    return (
      player.killedBy !== undefined &&
      [
        PlayerRoleEnum.CHASSEUR,
        PlayerRoleEnum.SORCIERE,
        PlayerRoleEnum.VILLAGEOIS,
      ].includes(player.killedBy)
    );
  }
}
