import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';

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

    return newPlayers;
  }
}
