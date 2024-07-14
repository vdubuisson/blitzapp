import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { findLeftNeighbor, findRightNeighbor } from '@/utils/neighbor.utils';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';
import { Observable } from 'rxjs';
import { RoundHandlerParameters } from '@/round-handlers/round-handler-parameters.interface';
import { AnnouncementEnum } from '@/enums/announcement.enum';
import { isLoupGarou } from '@/utils/roles.utils';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class MontreurOursRoundHandler extends DefaultRoundHandler {
  private announcementService: AnnouncementService;

  constructor({ announcementService }: RoundHandlerParameters) {
    super(RoundEnum.MONTREUR_OURS, false, true, RoundTypeEnum.AUTO);
    this.announcementService = announcementService as AnnouncementService;
  }

  override handleAction(
    players: Player[],
    selectedPlayers: number[],
  ): Observable<Player[]> {
    const montreurOursIndex = players.findIndex(
      (player) => player.role === PlayerRoleEnum.MONTREUR_OURS,
    );
    if (montreurOursIndex > -1) {
      const montreurOurs = players[montreurOursIndex];
      if (montreurOurs.statuses.has(PlayerStatusEnum.INFECTED)) {
        this.announcementService.announce(AnnouncementEnum.BEAR_GROWL);
        return super.handleAction(players, selectedPlayers);
      }

      const leftPlayer = findLeftNeighbor(players, montreurOursIndex) as Player;
      if (isLoupGarou(leftPlayer)) {
        this.announcementService.announce(AnnouncementEnum.BEAR_GROWL);
        return super.handleAction(players, selectedPlayers);
      }

      const rightPlayer = findRightNeighbor(players, montreurOursIndex);
      if (isLoupGarou(rightPlayer)) {
        this.announcementService.announce(AnnouncementEnum.BEAR_GROWL);
      }
    }
    return super.handleAction(players, selectedPlayers);
  }
}
