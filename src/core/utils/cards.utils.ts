import { Player } from '@/shared/types/player';
import { CardList } from '@/shared/types/card-list';
import { PlayerRole } from '@/types/player-role';

export function getNotPlayedCards(
  players: Player[],
  cardList: CardList,
): PlayerRole[] {
  const playedCards = players.map((player) => player.card);
  const notPlayedCards: PlayerRole[] = [];

  const notPlayedVillageoisCount =
    cardList.villageois -
    playedCards.filter((card) => card === PlayerRole.VILLAGEOIS).length;
  for (let i = 0; i < notPlayedVillageoisCount; i++) {
    notPlayedCards.push(PlayerRole.VILLAGEOIS);
  }

  const notPlayedLoupGarouCount =
    cardList.loupGarou -
    playedCards.filter((card) => card === PlayerRole.LOUP_GAROU).length;
  for (let i = 0; i < notPlayedLoupGarouCount; i++) {
    notPlayedCards.push(PlayerRole.LOUP_GAROU);
  }

  if (cardList.selectedRoles.has(PlayerRole.SOEUR)) {
    const notPlayedSoeurCount =
      2 - playedCards.filter((card) => card === PlayerRole.SOEUR).length;
    for (let i = 0; i < notPlayedSoeurCount; i++) {
      notPlayedCards.push(PlayerRole.SOEUR);
    }
  }

  if (cardList.selectedRoles.has(PlayerRole.FRERE)) {
    const notPlayedFrereCount =
      3 - playedCards.filter((card) => card === PlayerRole.FRERE).length;
    for (let i = 0; i < notPlayedFrereCount; i++) {
      notPlayedCards.push(PlayerRole.FRERE);
    }
  }

  Array.from(cardList.selectedRoles)
    .filter((role) => role !== PlayerRole.SOEUR && role !== PlayerRole.FRERE)
    .forEach((role) => {
      if (!playedCards.includes(role)) {
        notPlayedCards.push(role);
      }
    });

  return notPlayedCards;
}
