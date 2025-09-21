import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { Observable } from 'rxjs';
import { CardList } from '@/shared/types/card-list';

export interface RoundHandler {
  readonly isOnlyOnce: boolean;
  readonly isDuringDay: boolean;
  readonly type: RoundType;
  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
    selectedRole?: PlayerRole,
    isEquality?: boolean,
  ): Observable<Player[]>;
  getRoundConfig(players: Player[], cardList?: CardList): RoundConfig;
}
