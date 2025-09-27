import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class JoueurFluteRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.JOUEUR_FLUTE, false, false, RoundType.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) =>
        player.role !== PlayerRole.JOUEUR_FLUTE &&
        !player.isDead &&
        !player.statuses.has(PlayerStatus.CHARMED),
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 2;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return addStatusToPlayer(player, PlayerStatus.CHARMED);
  }
}
