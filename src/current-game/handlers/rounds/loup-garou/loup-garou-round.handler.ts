import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { isLoupGarou } from '@/utils/roles.utils';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class LoupGarouRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.LOUP_GAROU, false, false, RoundType.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    const areAllLoupGarouDead = this.areAllLoupGarouDead(players);
    return areAllLoupGarouDead
      ? []
      : players.filter((player) => !isLoupGarou(player) && !player.isDead);
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(players: Player[]): number {
    return this.areAllLoupGarouDead(players) ? 0 : 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    const updatedPlayer = addStatusToPlayer(player, PlayerStatus.WOLF_TARGET);
    updatedPlayer.killedBy = PlayerRole.LOUP_GAROU;
    return updatedPlayer;
  }

  private areAllLoupGarouDead(players: Player[]): boolean {
    return players.filter(isLoupGarou).every((player) => player.isDead);
  }
}
