import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { Observable } from 'rxjs';
import { CardList } from '@/models/card-list.model';

export interface RoundHandler {
  readonly isOnlyOnce: boolean;
  readonly isDuringDay: boolean;
  readonly type: RoundTypeEnum;
  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
    selectedRole?: PlayerRoleEnum,
    isEquality?: boolean,
  ): Observable<Player[]>;
  getRoundConfig(players: Player[], cardList?: CardList): Round;
}
