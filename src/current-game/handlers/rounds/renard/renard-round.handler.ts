import { AnnouncementTypesEnum } from '@/current-game/announcements/announcement-types';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { Announcer } from '@/current-game/announcements/announcer';
import { findLeftNeighbor, findRightNeighbor } from '@/utils/neighbor.utils';
import { isLoupGarou } from '@/utils/roles.utils';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class RenardRoundHandler extends DefaultRoundHandler {
  private readonly announcer = inject(Announcer);

  constructor() {
    super(RoundEnum.RENARD, false, false, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayers: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];

    if (selectedPlayers.length > 0) {
      if (this.isFoxActionSuccess(players, selectedPlayers[0])) {
        this.announcer.announce(AnnouncementTypesEnum.FOX_SUCCESS);
      } else {
        this.announcer.announce(AnnouncementTypesEnum.FOX_FAIL);
        const renardIndex = newPlayers.findIndex(
          (player) => player.role === PlayerRoleEnum.RENARD,
        );
        if (renardIndex > -1) {
          newPlayers[renardIndex] = addStatusToPlayer(
            newPlayers[renardIndex],
            PlayerStatusEnum.NO_POWER,
          );
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
