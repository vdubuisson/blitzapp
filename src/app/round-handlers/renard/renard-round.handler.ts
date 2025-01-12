import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { RoundHandlerParameters } from '@/round-handlers/round-handler-parameters.interface';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { findLeftNeighbor, findRightNeighbor } from '@/utils/neighbor.utils';
import { isLoupGarou } from '@/utils/roles.utils';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class RenardRoundHandler extends DefaultRoundHandler {
  private readonly announcementService: AnnouncementService;

  constructor({ announcementService }: RoundHandlerParameters) {
    super(RoundEnum.RENARD, false, false, RoundTypeEnum.PLAYERS);
    this.announcementService = announcementService as AnnouncementService;
  }

  override handleAction(
    players: Player[],
    selectedPlayers: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];

    if (selectedPlayers.length > 0) {
      if (this.isFoxActionSuccess(players, selectedPlayers[0])) {
        this.announcementService.announce(AnnouncementEnum.FOX_SUCCESS);
      } else {
        this.announcementService.announce(AnnouncementEnum.FOX_FAIL);
        const renardIndex = newPlayers.findIndex(
          (player) => player.role === PlayerRoleEnum.RENARD,
        );
        if (renardIndex > -1) {
          newPlayers[renardIndex] = {
            ...newPlayers[renardIndex],
            statuses: new Set([
              ...newPlayers[renardIndex].statuses,
              PlayerStatusEnum.NO_POWER,
            ]),
          };
        }
      }
    }

    return of(newPlayers);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter((player) => !player.isDead);
  }

  protected override getMaxSelectable(players: Player[]): number {
    return players
      .find((player) => player.role === PlayerRoleEnum.RENARD)
      ?.statuses.has(PlayerStatusEnum.NO_POWER)
      ? 0
      : 1;
  }

  private isFoxActionSuccess(
    players: Player[],
    selectedPlayerIndex: number,
  ): boolean {
    const centerPlayer = players[selectedPlayerIndex];
    if (isLoupGarou(centerPlayer)) {
      return true;
    }

    const leftPlayer = findLeftNeighbor(players, selectedPlayerIndex) as Player;
    if (isLoupGarou(leftPlayer)) {
      return true;
    }

    const rightPlayer = findRightNeighbor(players, selectedPlayerIndex);
    return isLoupGarou(rightPlayer);
  }
}
