import { AnnouncementTypesEnum } from '@/current-game/announcements/announcement-types';
import { Announcer } from '@/current-game/announcements/announcer';
import { NeighborFinder } from '@/current-game/players/neighbor-finder';
import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class RenardRoundHandler extends DefaultRoundHandler {
  private readonly announcer = inject(Announcer);
  private readonly neighborFinder = inject(NeighborFinder);
  private readonly playersStatusUtility = inject(PlayersStatusUtility);
  private readonly playersRoleUtility = inject(PlayersRoleUtility);

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
          newPlayers[renardIndex] = this.playersStatusUtility.addStatusToPlayer(
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
    if (this.playersRoleUtility.isLoupGarou(centerPlayer)) {
      return true;
    }

    const leftPlayer = this.neighborFinder.findLeftNeighbor(
      players,
      selectedPlayerIndex,
    ) as Player;
    if (this.playersRoleUtility.isLoupGarou(leftPlayer)) {
      return true;
    }

    const rightPlayer = this.neighborFinder.findRightNeighbor(
      players,
      selectedPlayerIndex,
    );
    return this.playersRoleUtility.isLoupGarou(rightPlayer);
  }
}
