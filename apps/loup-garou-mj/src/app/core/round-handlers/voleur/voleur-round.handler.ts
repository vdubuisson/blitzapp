import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';
import { CardList } from '../../models/card-list.model';
import { LOUPS_GAROUS_ROLES } from '../../configs/loups-garous-roles';
import { getNotPlayedCards } from '../../utils/cards.utils';

export class VoleurRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.ROLES;

  handleAction(
    players: Player[],
    _: number[],
    selectedRole?: PlayerRoleEnum,
  ): Observable<Player[]> {
    const newPlayers = [...players];
    const voleur = newPlayers.find(
      (player) => player.card === PlayerRoleEnum.VOLEUR,
    );
    if (voleur !== undefined && selectedRole !== undefined) {
      voleur.role = selectedRole;
      voleur.card = selectedRole;
    }
    return of(newPlayers);
  }

  getRoundConfig(players: Player[], cardList?: CardList): Round {
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

    return {
      role: RoundEnum.VOLEUR,
      selectablePlayers: players
        .filter((player) => player.role === PlayerRoleEnum.VOLEUR)
        .map((player) => player.id),
      selectableRoles: mustChange
        ? notPlayedCards
        : [...notPlayedCards, PlayerRoleEnum.VOLEUR],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
