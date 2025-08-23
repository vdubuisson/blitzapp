import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class SectaireRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.SECTAIRE, true, false, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = players.map((player) => {
      const isSelected = selectedPlayerIds.includes(player.id);
      return addStatusToPlayer(
        player,
        isSelected ? PlayerStatusEnum.BLUE_TEAM : PlayerStatusEnum.RED_TEAM,
      );
    });

    return of(newPlayers);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players;
  }

  protected override getMaxSelectable(players: Player[]): number {
    return players.length - 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }
}
