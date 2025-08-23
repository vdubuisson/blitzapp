import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { isLoupGarou } from '@/utils/roles.utils';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class LoupGarouRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.LOUP_GAROU, false, false, RoundTypeEnum.PLAYERS);
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
    const updatedPlayer = addStatusToPlayer(
      player,
      PlayerStatusEnum.WOLF_TARGET,
    );
    updatedPlayer.killedBy = PlayerRoleEnum.LOUP_GAROU;
    return updatedPlayer;
  }

  private areAllLoupGarouDead(players: Player[]): boolean {
    return players.filter(isLoupGarou).every((player) => player.isDead);
  }
}
