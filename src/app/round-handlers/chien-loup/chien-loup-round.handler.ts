import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class ChienLoupRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.CHIEN_LOUP, true, false, RoundTypeEnum.ROLES);
  }

  override handleAction(
    players: Player[],
    _: number[],
    selectedRole?: PlayerRoleEnum,
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

  protected override getSelectableRoles(): PlayerRoleEnum[] {
    return [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }
}
