import { inject, Injectable } from '@angular/core';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { StatusHandlersService } from '../status-handlers/status-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class StatusesService {
  private readonly statusHandlerService = inject(StatusHandlersService);

  /**
   * Cleans up player statuses after a day based on their roles.
   *
   * @param players - The list of players to clean statuses for.
   * @returns A new array of players with updated statuses.
   */
  cleanStatusesAfterDay(players: Player[]): Player[] {
    let newPlayers = [...players];
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
      newPlayers = this.statusHandlerService
        .getHandler(PlayerStatusEnum.RUSTY_SWORD)
        .triggerAction(newPlayers);
    }

    return newPlayers;
  }

  /**
   * Removes "NO_VOTE" status from players after the day.
   *
   * @param players - The list of current players.
   * @returns A new array of players with updated statuses.
   */
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
