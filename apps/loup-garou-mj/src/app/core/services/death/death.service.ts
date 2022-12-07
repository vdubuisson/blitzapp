import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { AnnouncementService } from '../announcement/announcement.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { VictoryHandlersService } from '../victory-handlers/victory-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class DeathService {
  private knownDeaths = new Set<number>();
  private deathsToAnnounce: Player[] = [];
  private afterDeathRoundQueue: RoundEnum[] = [];
  private rolesToRemove: PlayerRoleEnum[] = [];

  constructor(
    private roundHandlersService: RoundHandlersService,
    private victoryHandlersService: VictoryHandlersService,
    private announcementService: AnnouncementService
  ) {}

  getNextAfterDeathRound(): RoundEnum | undefined {
    return this.afterDeathRoundQueue.shift();
  }

  reset(): void {
    this.knownDeaths.clear();
    this.afterDeathRoundQueue = [];
  }

  handleNewDeaths(players: Player[]): Player[] {
    this.rolesToRemove = [];
    const newPlayers = [...players];
    this.handleWolfTarget(newPlayers);

    newPlayers
      .filter((player) => player.isDead && !this.knownDeaths.has(player.id))
      .forEach((player) => this.handlePlayerDeath(newPlayers, player));

    this.roundHandlersService.removeHandlers(this.rolesToRemove);
    this.victoryHandlersService.removeUselessHandlers(players);

    // TODO Annonce des nouveaux morts avec service d'annonce
    return newPlayers;
  }

  announceDeaths(): void {
    if (this.deathsToAnnounce.length > 0) {
      this.announcementService.announceDeaths(this.deathsToAnnounce);
      this.deathsToAnnounce = [];
    }
  }

  private handleWolfTarget(players: Player[]): void {
    players
      .filter((player) => player.statuses.has(PlayerStatusEnum.WOLF_TARGET))
      .forEach((player) => {
        player.statuses.delete(PlayerStatusEnum.WOLF_TARGET);
        player.isDead = true;
      });
  }

  private handlePlayerDeath(players: Player[], deadPlayer: Player): void {
    this.knownDeaths.add(deadPlayer.id);
    this.deathsToAnnounce.push(deadPlayer);
    this.handlePlayerDeathStatuses(players, deadPlayer);
    this.handlePlayerDeathRole(players, deadPlayer);
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
  }

  private handlePlayerDeathRole(players: Player[], deadPlayer: Player): void {
    switch (deadPlayer.role) {
      case PlayerRoleEnum.LOUP_GAROU:
        if (
          players.filter(
            (player) =>
              player.role === PlayerRoleEnum.LOUP_GAROU && !player.isDead
          ).length === 0
        ) {
          this.rolesToRemove.push(PlayerRoleEnum.LOUP_GAROU);
        }
        break;
      case PlayerRoleEnum.CHASSEUR:
        this.afterDeathRoundQueue.unshift(RoundEnum.CHASSEUR);
        break;
      case PlayerRoleEnum.CUPIDON:
        this.rolesToRemove.push(PlayerRoleEnum.CUPIDON);
        break;
      case PlayerRoleEnum.SORCIERE:
        this.rolesToRemove.push(PlayerRoleEnum.SORCIERE);
        break;
      case PlayerRoleEnum.VOYANTE:
        this.rolesToRemove.push(PlayerRoleEnum.VOYANTE);
        break;
      default:
        break;
    }
  }
}
