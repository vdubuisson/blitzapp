import { Victory, VictoryEnum } from '@/types/victory';

export const VICTORY_NAMES: Record<Victory, string> = {
  [VictoryEnum.NONE]: 'Tout le monde est mort',
  [VictoryEnum.ANGE]: 'Ange',
  [VictoryEnum.AMOUREUX]: 'Amoureux',
  [VictoryEnum.LOUP_GAROU]: 'Loups-garous',
  [VictoryEnum.VILLAGEOIS]: 'Villageois',
  [VictoryEnum.JOUEUR_FLUTE]: 'Joueur de flûte',
  [VictoryEnum.LOUP_BLANC]: 'Loup-garou blanc',
  [VictoryEnum.SECTAIRE]: 'Abominable sectaire',
};
