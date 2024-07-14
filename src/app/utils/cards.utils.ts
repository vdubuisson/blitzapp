import { Player } from '@/models/player.model';
import { CardList } from '@/models/card-list.model';
import { PlayerRoleEnum } from '@/enums/player-role.enum';

export function getNotPlayedCards(
  players: Player[],
  cardList: CardList,
): PlayerRoleEnum[] {
  const playedCards = players.map((player) => player.card);
  const notPlayedCards: PlayerRoleEnum[] = [];

  const notPlayedVillageoisCount =
    cardList.villageois -
    playedCards.filter((card) => card === PlayerRoleEnum.VILLAGEOIS).length;
  for (let i = 0; i < notPlayedVillageoisCount; i++) {
    notPlayedCards.push(PlayerRoleEnum.VILLAGEOIS);
  }

  const notPlayedLoupGarouCount =
    cardList.loupGarou -
    playedCards.filter((card) => card === PlayerRoleEnum.LOUP_GAROU).length;
  for (let i = 0; i < notPlayedLoupGarouCount; i++) {
    notPlayedCards.push(PlayerRoleEnum.LOUP_GAROU);
  }

  if (cardList.selectedRoles.has(PlayerRoleEnum.SOEUR)) {
    const notPlayedSoeurCount =
      2 - playedCards.filter((card) => card === PlayerRoleEnum.SOEUR).length;
    for (let i = 0; i < notPlayedSoeurCount; i++) {
      notPlayedCards.push(PlayerRoleEnum.SOEUR);
    }
  }

  if (cardList.selectedRoles.has(PlayerRoleEnum.FRERE)) {
    const notPlayedFrereCount =
      3 - playedCards.filter((card) => card === PlayerRoleEnum.FRERE).length;
    for (let i = 0; i < notPlayedFrereCount; i++) {
      notPlayedCards.push(PlayerRoleEnum.FRERE);
    }
  }

  Array.from(cardList.selectedRoles)
    .filter(
      (role) => role !== PlayerRoleEnum.SOEUR && role !== PlayerRoleEnum.FRERE,
    )
    .forEach((role) => {
      if (!playedCards.includes(role)) {
        notPlayedCards.push(role);
      }
    });

  return notPlayedCards;
}
