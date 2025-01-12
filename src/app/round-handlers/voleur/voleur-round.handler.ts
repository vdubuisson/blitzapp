import { LOUPS_GAROUS_ROLES } from '@/configs/loups-garous-roles';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { CardList } from '@/models/card-list.model';
import { Player } from '@/models/player.model';
import { getNotPlayedCards } from '@/utils/cards.utils';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class VoleurRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.VOLEUR, true, false, RoundTypeEnum.ROLES);
  }

  override handleAction(
    players: Player[],
    _: number[],
    selectedRole?: PlayerRoleEnum,
  ): Observable<Player[]> {
    const newPlayers = [...players];
    const voleurIndex = newPlayers.findIndex(
      (player) => player.card === PlayerRoleEnum.VOLEUR,
    );
    if (voleurIndex > -1 && selectedRole !== undefined) {
      newPlayers[voleurIndex] = {
        ...newPlayers[voleurIndex],
        role: selectedRole,
        card: selectedRole,
      };
    }
    return of(newPlayers);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter((player) => player.role === PlayerRoleEnum.VOLEUR);
  }

  protected override getSelectableRoles(
    players: Player[],
    cardList: CardList,
  ): PlayerRoleEnum[] {
    if (cardList === undefined) {
      throw new Error('VoleurRoundHandler need cardList');
    }
    const notPlayedCards = getNotPlayedCards(players, cardList);

    if (notPlayedCards.length !== 2) {
      throw new Error('Incorrect number of cards not played');
    }

    const mustChange = notPlayedCards.every((card) =>
      LOUPS_GAROUS_ROLES.includes(card),
    );

    return mustChange
      ? notPlayedCards
      : [...notPlayedCards, PlayerRoleEnum.VOLEUR];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }
}
