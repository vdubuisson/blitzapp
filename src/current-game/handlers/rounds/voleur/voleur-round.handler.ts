import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { getNotPlayedCards } from '@/utils/cards.utils';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class VoleurRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.VOLEUR, true, false, RoundType.ROLES);
  }

  override handleAction(
    players: Player[],
    _: number[],
    selectedRole?: PlayerRole,
  ): Observable<Player[]> {
    const newPlayers = [...players];
    const voleurIndex = newPlayers.findIndex(
      (player) => player.card === PlayerRole.VOLEUR,
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
    return players.filter((player) => player.role === PlayerRole.VOLEUR);
  }

  protected override getSelectableRoles(
    players: Player[],
    cardList: CardList,
  ): PlayerRole[] {
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

    return mustChange ? notPlayedCards : [...notPlayedCards, PlayerRole.VOLEUR];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }
}
