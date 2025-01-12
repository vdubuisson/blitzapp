import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class CapitaineRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.CAPITAINE, true, true, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter((player) => !player.isDead);
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return {
      ...player,
      statuses: new Set([...player.statuses, PlayerStatusEnum.CAPTAIN]),
    };
  }
}
