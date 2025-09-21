import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class ChienLoupRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.CHIEN_LOUP, true, false, RoundType.ROLES);
  }

  override handleAction(
    players: Player[],
    _: number[],
    selectedRole?: PlayerRole,
  ): Observable<Player[]> {
    const newPlayers = [...players];

    const chienLoupIndex = newPlayers.findIndex(
      (player) => player.role === PlayerRole.CHIEN_LOUP,
    );
    if (chienLoupIndex > -1 && selectedRole !== undefined) {
      const newChienLoup = {
        ...newPlayers[chienLoupIndex],
        role: selectedRole,
      };
      newPlayers[chienLoupIndex] = newChienLoup;
    }

    return of(newPlayers);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter((player) => player.role === PlayerRole.CHIEN_LOUP);
  }

  protected override getSelectableRoles(): PlayerRole[] {
    return [PlayerRole.VILLAGEOIS, PlayerRole.LOUP_GAROU];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }
}
