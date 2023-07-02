import { PlayerStatusEnum } from '../enums/player-status.enum';

export const STATUS_NAMES: Record<PlayerStatusEnum, string> = {
  [PlayerStatusEnum.WOLF_TARGET]: 'Cible loups-garous',
  [PlayerStatusEnum.HEALTH_POTION]: 'Potion de vie',
  [PlayerStatusEnum.DEATH_POTION]: 'Potion de mort',
  [PlayerStatusEnum.CAPTAIN]: 'Capitaine',
  [PlayerStatusEnum.LOVER]: 'Amoureux',
  // [PlayerStatusEnum.FIRST_DEATH]: "Mort une fois",
  [PlayerStatusEnum.PROTECTED]: 'Protégé',
  [PlayerStatusEnum.NO_POWER]: 'Plus de pouvoir',
  [PlayerStatusEnum.CHARMED]: 'Charmé',
  [PlayerStatusEnum.CHILD_MODEL]: "Modèle de l'enfant",
  [PlayerStatusEnum.RAVEN]: 'Cible du corbeau',
  // [PlayerStatusEnum.RUSTY_SWORD]: "Touché par l'épée rouillée",
  // [PlayerStatusEnum.COMEDIAN]: "Comédien",
  // [PlayerStatusEnum.INFECTED]: "Infecté",
};
