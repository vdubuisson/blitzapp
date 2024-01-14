import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { INNOCENTS_POWER_REMOVAL_ROLES } from '../../configs/innocents-power-removal-roles';

@Injectable({
  providedIn: 'root',
})
export class StatusesService {
  cleanStatusesAfterDay(players: Player[]): Player[] {
    const newPlayers = [...players];
    const roles = new Set(players.map((player) => player.role));

    if (roles.has(PlayerRoleEnum.CORBEAU)) {
      newPlayers
        .find((player) => player.statuses.has(PlayerStatusEnum.RAVEN))
        ?.statuses.delete(PlayerStatusEnum.RAVEN);
    }

    if (
      roles.has(PlayerRoleEnum.SALVATEUR) &&
      players.find((player) => player.role === PlayerRoleEnum.SALVATEUR)?.isDead
    ) {
      newPlayers
        .find((player) => player.statuses.has(PlayerStatusEnum.PROTECTED))
        ?.statuses.delete(PlayerStatusEnum.PROTECTED);
    }

    if (
      roles.has(PlayerRoleEnum.CHEVALIER) &&
      players.find((player) => player.role === PlayerRoleEnum.CHEVALIER)?.isDead
    ) {
      const playerWithSword = newPlayers.find((player) =>
        player.statuses.has(PlayerStatusEnum.RUSTY_SWORD),
      );
      if (playerWithSword != undefined) {
        playerWithSword.statuses.delete(PlayerStatusEnum.RUSTY_SWORD);
        playerWithSword.isDead = true;
        playerWithSword.killedBy = PlayerRoleEnum.CHEVALIER;
      }
    }

    return newPlayers;
  }

  removePowersFromInnocents(players: Player[]): void {
    const sorcierePlayer = players.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE,
    );
    if (sorcierePlayer !== undefined) {
      sorcierePlayer.statuses.delete(PlayerStatusEnum.HEALTH_POTION);
      sorcierePlayer.statuses.delete(PlayerStatusEnum.DEATH_POTION);
    }

    players
      .filter((player) => INNOCENTS_POWER_REMOVAL_ROLES.includes(player.role))
      .forEach((player) => {
        player.role = PlayerRoleEnum.VILLAGEOIS;
      });
  }

  cleanNoVoteAfterDay(players: Player[]): Player[] {
    const newPlayers = [...players];

    newPlayers
      .filter(
        (player) =>
          player.statuses.has(PlayerStatusEnum.NO_VOTE) &&
          (player.role !== PlayerRoleEnum.IDIOT ||
            player.killedBy === undefined),
      )
      .forEach((player) => player.statuses.delete(PlayerStatusEnum.NO_VOTE));

    return newPlayers;
  }
}
