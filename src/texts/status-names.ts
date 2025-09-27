import { PlayerStatus } from '@/types/player-status';

export const STATUS_NAMES: Record<PlayerStatus, string> = {
  [PlayerStatus.WOLF_TARGET]: 'Cible loups-garous',
  [PlayerStatus.HEALTH_POTION]: 'Potion de vie',
  [PlayerStatus.DEATH_POTION]: 'Potion de mort',
  [PlayerStatus.CAPTAIN]: 'Capitaine',
  [PlayerStatus.LOVER]: 'Amoureux',
  [PlayerStatus.INJURED]: 'Blessé',
  [PlayerStatus.PROTECTED]: 'Protégé',
  [PlayerStatus.NO_POWER]: 'Plus de pouvoir',
  [PlayerStatus.CHARMED]: 'Charmé',
  [PlayerStatus.CHILD_MODEL]: "Modèle de l'enfant",
  [PlayerStatus.RAVEN]: 'Cible du corbeau',
  [PlayerStatus.NO_VOTE]: 'Pas de vote',
  [PlayerStatus.RUSTY_SWORD]: "Contaminé par l'épée rouillée",
  [PlayerStatus.BLUE_TEAM]: 'Groupe bleu',
  [PlayerStatus.RED_TEAM]: 'Groupe rouge',
  // [PlayerStatusEnum.COMEDIAN]: "Comédien",
  [PlayerStatus.INFECTED]: 'Infecté',
  [PlayerStatus.DEVOURED]: 'Dévoré',
};
