import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { Observable, of } from 'rxjs';

export class DefaultRoundHandler implements RoundHandler {
  constructor(
    private readonly roundRole: Round,
    public readonly isOnlyOnce: boolean,
    public readonly isDuringDay: boolean,
    public readonly type: RoundType = RoundType.DEFAULT,
  ) {}

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];

    selectedPlayerIds.forEach((playerId) => {
      const playerIndex = newPlayers.findIndex(
        (player) => player.id === playerId,
      );

      if (playerIndex > -1) {
        const newPlayer = this.affectSelectedPlayer(newPlayers[playerIndex]);
        newPlayers[playerIndex] = newPlayer;
      }
    });

    return of(newPlayers);
  }

  getRoundConfig(players: Player[], cardList?: CardList): RoundConfig {
    return {
      round: this.roundRole,
      selectablePlayers: this.getSelectablePlayers(players).map(
        (player) => player.id,
      ),
      selectableRoles: this.getSelectableRoles(players, cardList),
      maxSelectable: this.getMaxSelectable(players),
      minSelectable: this.getMinSelectable(players),
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }

  protected getSelectablePlayers(_: Player[]): Player[] {
    return [];
  }

  protected getSelectableRoles(_?: Player[], __?: CardList): PlayerRole[] {
    return [];
  }

  protected getMaxSelectable(players: Player[]): number {
    return this.getSelectablePlayers(players).length;
  }

  protected getMinSelectable(_: Player[]): number {
    return 0;
  }

  protected affectSelectedPlayer(player: Player): Player {
    return player;
  }
}
