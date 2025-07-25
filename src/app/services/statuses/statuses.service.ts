import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusesService {
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
