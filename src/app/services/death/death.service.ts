import { inject, Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player, StoredPlayer } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { StorageService } from '@/services/storage/storage.service';
import { AnnouncementEnum } from '@/enums/announcement.enum';
import { StatusesService } from '@/services/statuses/statuses.service';
import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/configs/innocents-power-removal-roles';
import { findLeftNeighbor } from '@/utils/neighbor.utils';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class DeathService {
  private readonly roundHandlersService = inject(RoundHandlersService);
  private readonly victoryHandlersService = inject(VictoryHandlersService);
  private readonly announcementService = inject(AnnouncementService);
  private readonly storageService = inject(StorageService);
  private readonly statusesService = inject(StatusesService);

  private knownDeaths = new Set<number>();
  private deathsToAnnounce: Player[] = [];
  private afterDeathRoundQueue: RoundEnum[] = [];
  private rolesToRemove: PlayerRoleEnum[] = [];

  private readonly KNOWN_DEATHS_KEY = 'DeathService_knownDeaths';
  private readonly ANNOUNCE_KEY = 'DeathService_deathsToAnnounce';
  private readonly QUEUE_KEY = 'DeathService_afterDeathRoundQueue';

  constructor() {
    this.initFromStorage();
  }

  getNextAfterDeathRound(): RoundEnum | undefined {
    const afterDeathRound = this.afterDeathRoundQueue.shift();
    this.storageService.set(this.QUEUE_KEY, this.afterDeathRoundQueue);
    return afterDeathRound;
  }

  reset(): void {
    this.knownDeaths.clear();
    this.deathsToAnnounce = [];
    this.rolesToRemove = [];
    this.afterDeathRoundQueue = [];
    this.storageService.remove(this.KNOWN_DEATHS_KEY);
    this.storageService.remove(this.ANNOUNCE_KEY);
    this.storageService.remove(this.QUEUE_KEY);
  }

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
      .filter((player) => player.isDead && !this.knownDeaths.has(player.id))
      .forEach((player) => this.handlePlayerDeath(newPlayers, player));

    if (this.rolesToRemove.length > 0) {
      this.roundHandlersService.removeHandlers(this.rolesToRemove);
    }
    this.victoryHandlersService.removeUselessHandlers(players);

    return newPlayers;
  }

  announceDeaths(): void {
    if (this.deathsToAnnounce.length > 0) {
      const deadByChevalier = this.deathsToAnnounce.find(
        (player) => player.killedBy === PlayerRoleEnum.CHEVALIER,
      );
      if (deadByChevalier !== undefined) {
        this.announcementService.announce(
          AnnouncementEnum.WOLF_KILLED_BY_CHEVALIER,
          { playerName: deadByChevalier.name },
        );
      }
      this.announcementService.announceDeaths(this.deathsToAnnounce);
      const deadAncienPlayer = this.deathsToAnnounce.find(
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
      this.deathsToAnnounce = [];
      this.storageService.set(this.ANNOUNCE_KEY, this.deathsToAnnounce);
    }
  }

  private handlePlayerDeath(players: Player[], deadPlayer: Player): void {
    this.knownDeaths.add(deadPlayer.id);
    this.deathsToAnnounce.push(deadPlayer);
    this.handlePlayerDeathStatuses(players, deadPlayer);
    this.handlePlayerDeathRole(players, deadPlayer);

    this.storageService.set(
      this.KNOWN_DEATHS_KEY,
      Array.from(this.knownDeaths),
    );
    const storedDeathsToAnnounce: StoredPlayer[] = this.deathsToAnnounce.map(
      (player) => ({
        ...player,
        statuses: Array.from(player.statuses),
      }),
    );
    this.storageService.set(this.ANNOUNCE_KEY, storedDeathsToAnnounce);
    this.storageService.set(this.QUEUE_KEY, this.afterDeathRoundQueue);
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
      this.afterDeathRoundQueue.push(RoundEnum.CAPITAINE);
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
        this.afterDeathRoundQueue.unshift(RoundEnum.CHASSEUR);
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
          this.afterDeathRoundQueue.push(RoundEnum.BOUC);
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

  private initFromStorage(): void {
    combineLatest([
      this.storageService.get<number[]>(this.KNOWN_DEATHS_KEY),
      this.storageService.get<StoredPlayer[]>(this.ANNOUNCE_KEY),
      this.storageService.get<RoundEnum[]>(this.QUEUE_KEY),
    ]).subscribe(([knownDeaths, storedAnnounce, queue]) => {
      if (knownDeaths !== null) {
        this.knownDeaths = new Set(knownDeaths);
      }
      if (storedAnnounce !== null) {
        const announce = storedAnnounce.map((player) => ({
          ...player,
          statuses: new Set(player.statuses),
        }));
        this.deathsToAnnounce = announce;
      }
      if (queue !== null) {
        this.afterDeathRoundQueue = queue;
      }
    });
  }
}
