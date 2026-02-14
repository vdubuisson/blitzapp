import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class LoupBlancRoundHandler extends DefaultRoundHandler {
  private readonly playersRoleUtility = inject(PlayersRoleUtility);

  constructor() {
    super(RoundEnum.LOUP_BLANC, false, false, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) =>
        this.playersRoleUtility.isLoupGarou(player) &&
        player.role !== PlayerRoleEnum.LOUP_BLANC &&
        !player.isDead,
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return {
      ...player,
      isDead: true,
      killedBy: PlayerRoleEnum.LOUP_BLANC,
    };
  }
}
