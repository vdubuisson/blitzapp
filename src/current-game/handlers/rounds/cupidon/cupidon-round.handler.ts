import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class CupidonRoundHandler extends DefaultRoundHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

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
    return this.playersStatusUtility.addStatusToPlayer(
      player,
      PlayerStatusEnum.LOVER,
    );
  }
}
