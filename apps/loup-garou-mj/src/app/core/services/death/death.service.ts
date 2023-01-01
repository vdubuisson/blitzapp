import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { AnnouncementService } from '../announcement/announcement.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { StorageService } from '../storage/storage.service';
import { VictoryHandlersService } from '../victory-handlers/victory-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class DeathService {
  private knownDeaths = new Set<number>();
  private deathsToAnnounce: Player[] = [];
  private afterDeathRoundQueue: RoundEnum[] = [];
  private rolesToRemove: PlayerRoleEnum[] = [];

  private readonly KNOWN_DEATHS_KEY = 'DeathService_knownDeaths';
  private readonly ANNOUNCE_KEY = 'DeathService_deathsToAnnounce';
  private readonly QUEUE_KEY = 'DeathService_afterDeathRoundQueue';

  constructor(
    private roundHandlersService: RoundHandlersService,
    private victoryHandlersService: VictoryHandlersService,
    private announcementService: AnnouncementService,
    private storageService: StorageService
  ) {
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
    this.handleWolfTarget(newPlayers);

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
      this.announcementService.announceDeaths(this.deathsToAnnounce);
      this.deathsToAnnounce = [];
      this.storageService.set(this.ANNOUNCE_KEY, this.deathsToAnnounce);
    }
  }

  private handleWolfTarget(players: Player[]): void {
    players
      .filter((player) => player.statuses.has(PlayerStatusEnum.WOLF_TARGET))
      .forEach((player) => {
        player.statuses.delete(PlayerStatusEnum.WOLF_TARGET);
        if (
          !player.statuses.has(PlayerStatusEnum.PROTECTED) ||
          player.role === PlayerRoleEnum.PETITE_FILLE
        ) {
          player.isDead = true;
        }
      });
  }

  private handlePlayerDeath(players: Player[], deadPlayer: Player): void {
    this.knownDeaths.add(deadPlayer.id);
    this.deathsToAnnounce.push(deadPlayer);
    this.handlePlayerDeathStatuses(players, deadPlayer);
    this.handlePlayerDeathRole(players, deadPlayer);

    this.storageService.set(
      this.KNOWN_DEATHS_KEY,
      Array.from(this.knownDeaths)
    );
    this.storageService.set(this.ANNOUNCE_KEY, this.deathsToAnnounce);
    this.storageService.set(this.QUEUE_KEY, this.afterDeathRoundQueue);
  }

  private handlePlayerDeathStatuses(
    players: Player[],
    deadPlayer: Player
  ): void {
    if (deadPlayer.statuses.has(PlayerStatusEnum.CAPTAIN)) {
      deadPlayer.statuses.delete(PlayerStatusEnum.CAPTAIN);
      this.afterDeathRoundQueue.push(RoundEnum.CAPITAINE);
    }
    if (deadPlayer.statuses.has(PlayerStatusEnum.LOVER)) {
      const otherLivingLover = players.find(
        (player) =>
          player.statuses.has(PlayerStatusEnum.LOVER) &&
          player.id !== deadPlayer.id &&
          !player.isDead
      );
      if (otherLivingLover !== undefined) {
        otherLivingLover.isDead = true;
        this.handlePlayerDeath(players, otherLivingLover);
      }
    }
    if (deadPlayer.statuses.has(PlayerStatusEnum.CHILD_MODEL)) {
      const enfantSauvage = players.find(
        (player) => player.role === PlayerRoleEnum.ENFANT_SAUVAGE
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
              ].includes(player.role) && !player.isDead
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
      default:
        this.rolesToRemove.push(deadPlayer.role);
        break;
    }
  }

  private initFromStorage(): void {
    combineLatest([
      this.storageService.get<number[]>(this.KNOWN_DEATHS_KEY),
      this.storageService.get<Player[]>(this.ANNOUNCE_KEY),
      this.storageService.get<RoundEnum[]>(this.QUEUE_KEY),
    ]).subscribe(([knownDeaths, announce, queue]) => {
      if (knownDeaths !== null) {
        this.knownDeaths = new Set(knownDeaths);
      }
      if (announce !== null) {
        this.deathsToAnnounce = announce;
      }
      if (queue !== null) {
        this.afterDeathRoundQueue = queue;
      }
    });
  }
}
