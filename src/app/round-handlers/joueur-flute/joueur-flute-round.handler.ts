import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class JoueurFluteRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.JOUEUR_FLUTE, false, false, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) =>
        player.role !== PlayerRoleEnum.JOUEUR_FLUTE &&
        !player.isDead &&
        !player.statuses.has(PlayerStatusEnum.CHARMED),
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 2;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return addStatusToPlayer(player, PlayerStatusEnum.CHARMED);
  }
}
