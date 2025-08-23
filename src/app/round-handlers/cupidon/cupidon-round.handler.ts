import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class CupidonRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.CUPIDON, true, false, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players;
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 2;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 2;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return addStatusToPlayer(player, PlayerStatusEnum.LOVER);
  }
}
