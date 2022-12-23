import { LOUPS_GAROUS_ROLES } from '../../constants/loups-garous-roles';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import {
  findLeftNeighbor,
  findRightNeighbor,
} from '../../utils/neighbor.utils';
import { RoundHandler } from '../round-handler.interface';

export class RenardRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  constructor(private announcementService: AnnouncementService) {}

  handleAction(players: Player[], selectedPlayers: number[]): Player[] {
    const newPlayers = [...players];

    if (selectedPlayers.length > 0) {
      if (this.isFoxActionSuccess(players, selectedPlayers[0])) {
        this.announcementService.announceFoxSuccess();
      } else {
        this.announcementService.announceFoxFail();
        newPlayers
          .find((player) => player.role === PlayerRoleEnum.RENARD)
          ?.statuses.add(PlayerStatusEnum.NO_POWER);
      }
    }

    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.RENARD,
      selectablePlayers: players
        .filter((player) => !player.isDead)
        .map((player) => player.id),
      maxSelectable: players
        .find((player) => player.role === PlayerRoleEnum.RENARD)
        ?.statuses.has(PlayerStatusEnum.NO_POWER)
        ? 0
        : 1,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }

  private isFoxActionSuccess(
    players: Player[],
    selectedPlayerIndex: number
  ): boolean {
    const centerPlayer = players[selectedPlayerIndex];
    // TODO handle INFECTED player
    if (LOUPS_GAROUS_ROLES.includes(centerPlayer.role)) {
      return true;
    }

    const leftPlayer = findLeftNeighbor(players, selectedPlayerIndex);
    // TODO handle INFECTED player
    if (LOUPS_GAROUS_ROLES.includes(leftPlayer.role)) {
      return true;
    }

    const rightPlayer = findRightNeighbor(players, selectedPlayerIndex);
    // TODO handle INFECTED player
    if (LOUPS_GAROUS_ROLES.includes(rightPlayer.role)) {
      return true;
    }

    return false;
  }
}
