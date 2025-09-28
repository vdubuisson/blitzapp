import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class ChienLoupRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.CHIEN_LOUP, true, false, RoundTypeEnum.ROLES);
  }

  override handleAction(
    players: Player[],
    _: number[],
    selectedRole?: PlayerRole,
  ): Observable<Player[]> {
    const newPlayers = [...players];

    const chienLoupIndex = newPlayers.findIndex(
      (player) => player.role === PlayerRoleEnum.CHIEN_LOUP,
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
    return players.filter(
      (player) => player.role === PlayerRoleEnum.CHIEN_LOUP,
    );
  }

  protected override getSelectableRoles(): PlayerRole[] {
    return [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }
}
