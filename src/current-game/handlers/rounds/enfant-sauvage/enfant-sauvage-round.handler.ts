import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class EnfantSauvageRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.ENFANT_SAUVAGE, true, false, RoundType.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) => player.role !== PlayerRole.ENFANT_SAUVAGE,
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return addStatusToPlayer(player, PlayerStatus.CHILD_MODEL);
  }
}
