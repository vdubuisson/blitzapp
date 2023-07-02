import { LOUPS_GAROUS_ROLES } from '../../configs/loups-garous-roles';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import {
  findLeftNeighbor,
  findRightNeighbor,
} from '../../utils/neighbor.utils';
import { DefaultRoundHandler } from '../default-round.handler';

export class MontreurOursRoundHandler extends DefaultRoundHandler {
  constructor(private announcementService: AnnouncementService) {
    super(RoundEnum.MONTREUR_OURS, false, true, RoundTypeEnum.AUTO);
  }

  override handleAction(
    players: Player[],
    selectedPlayers: number[]
  ): Player[] {
    const montreurOursIndex = players.findIndex(
      (player) => player.role === PlayerRoleEnum.MONTREUR_OURS
    );
    if (montreurOursIndex > -1) {
      // const montreurOurs = players[montreurOursIndex];
      // TODO If INFECTED then announce and return

      const leftPlayer = findLeftNeighbor(players, montreurOursIndex);
      // TODO handle INFECTED player
      if (LOUPS_GAROUS_ROLES.includes(leftPlayer.role)) {
        this.announcementService.announceBearGrowl();
        return super.handleAction(players, selectedPlayers);
      }

      const rightPlayer = findRightNeighbor(players, montreurOursIndex);
      // TODO handle INFECTED player
      if (LOUPS_GAROUS_ROLES.includes(rightPlayer.role)) {
        this.announcementService.announceBearGrowl();
      }
    }
    return super.handleAction(players, selectedPlayers);
  }
}
