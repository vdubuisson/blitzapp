import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class LoupGarouRoundHandler extends DefaultRoundHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);
  private readonly playersRoleUtility = inject(PlayersRoleUtility);

  constructor() {
    super(RoundEnum.LOUP_GAROU, false, false, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    const areAllLoupGarouDead = this.areAllLoupGarouDead(players);
    return areAllLoupGarouDead
      ? []
      : players.filter(
          (player) =>
            !this.playersRoleUtility.isLoupGarou(player) && !player.isDead,
        );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(players: Player[]): number {
    return this.areAllLoupGarouDead(players) ? 0 : 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    const updatedPlayer = this.playersStatusUtility.addStatusToPlayer(
      player,
      PlayerStatusEnum.WOLF_TARGET,
    );
    updatedPlayer.killedBy = PlayerRoleEnum.LOUP_GAROU;
    return updatedPlayer;
  }

  private areAllLoupGarouDead(players: Player[]): boolean {
    return players
      .filter((player) => this.playersRoleUtility.isLoupGarou(player))
      .every((player) => player.isDead);
  }
}
