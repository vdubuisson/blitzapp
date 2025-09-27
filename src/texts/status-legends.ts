import { PlayerStatus } from '@/types/player-status';

export const STATUS_LEGENDS: Record<PlayerStatus, string> = {
  [PlayerStatus.WOLF_TARGET]: `Ce joueur est la cible des loups-garous pour cette nuit.`,
  [PlayerStatus.HEALTH_POTION]: `La sorcière a toujours sa potion de vie.`,
  [PlayerStatus.DEATH_POTION]: `La sorcière a toujours sa potion de mort.`,
  [PlayerStatus.CAPTAIN]: `Ce joueur est actuellement le capitaine, son vote pendant le jour compte double.`,
  [PlayerStatus.LOVER]: `Ce joueur fait partie du couple d'amoureux.`,
  [PlayerStatus.CHARMED]: `Ce joueur a été charmé par le joueur de flûte.`,
  [PlayerStatus.RAVEN]: `Ce joueur est actuellement accusé par le corbeau, il a 2 votes contre lui en plus.`,
  [PlayerStatus.CHILD_MODEL]: `Ce joueur est le modèle de l'enfant sauvage. S'il meurt alors l'enfant sauvage devient un loup-garou.`,
  [PlayerStatus.PROTECTED]: `Ce joueur est actuellement protégé par le Salvateur.`,
  [PlayerStatus.NO_POWER]: `Ce joueur a perdu son pouvoir. Par exemple pour le Renard, il ne peut plus renifler.`,
  [PlayerStatus.INJURED]: `Ce joueur a survécu à une première attaque de loup-garou.`,
  [PlayerStatus.NO_VOTE]: `Ce joueur ne peut pas voter pendant la journée.`,
  [PlayerStatus.RUSTY_SWORD]: `Ce joueur est contaminé par l'épée rouillée du chevalier, il mourra à la fin de la journée.`,
  [PlayerStatus.BLUE_TEAM]: `Ce joueur fait partie du groupe Bleu (pour l'Abominable sectaire).`,
  [PlayerStatus.RED_TEAM]: `Ce joueur fait partie du groupe Rouge (pour l'Abominable sectaire).`,
  [PlayerStatus.INFECTED]: `Ce joueur est infecté. Il joue maintenant avec les loups-garous`,
  [PlayerStatus.DEVOURED]: `Ce joueur vient d'être dévoré par les loups-garous. A la fin de la nuit il mourra.`,
};
