import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class CorbeauRoundHandler extends DefaultRoundHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  constructor() {
    super(RoundEnum.CORBEAU, false, false, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) => player.role !== PlayerRoleEnum.CORBEAU && !player.isDead,
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return this.playersStatusUtility.addStatusToPlayer(
      player,
      PlayerStatusEnum.RAVEN,
    );
  }
}
