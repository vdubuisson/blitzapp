import { LOUPS_GAROUS_ROLES } from '../../constants/loups-garous-roles';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { AnnouncementService } from '../../services/announcement/announcement.service';
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

      const leftPlayer = this.findLeftNeighbor(players, montreurOursIndex);
      // TODO handle INFECTED player
      if (LOUPS_GAROUS_ROLES.includes(leftPlayer.role)) {
        this.announcementService.announceBearGrowl();
        return super.handleAction(players, selectedPlayers);
      }

      const rightPlayer = this.findRightNeighbor(players, montreurOursIndex);
      // TODO handle INFECTED player
      if (LOUPS_GAROUS_ROLES.includes(rightPlayer.role)) {
        this.announcementService.announceBearGrowl();
      }
    }
    return super.handleAction(players, selectedPlayers);
  }

  private findLeftNeighbor(
    players: Player[],
    montreurOursIndex: number
  ): Player {
    let leftIndex = montreurOursIndex + 1;
    if (leftIndex > players.length - 1) {
      leftIndex = 0;
    }
    let leftPlayer: Player;
    do {
      leftPlayer = players[leftIndex];
      leftIndex++;
      if (leftIndex > players.length - 1) {
        leftIndex = 0;
      }
    } while (leftPlayer.isDead && leftIndex !== montreurOursIndex);
    return leftPlayer;
  }

  private findRightNeighbor(
    players: Player[],
    montreurOursIndex: number
  ): Player {
    let rightIndex = montreurOursIndex - 1;
    if (rightIndex < 0) {
      rightIndex = players.length - 1;
    }
    let rightPlayer: Player;
    do {
      rightPlayer = players[rightIndex];
      rightIndex--;
      if (rightIndex < 0) {
        rightIndex = players.length - 1;
      }
    } while (rightPlayer.isDead && rightIndex !== montreurOursIndex);
    return rightPlayer;
  }
}
