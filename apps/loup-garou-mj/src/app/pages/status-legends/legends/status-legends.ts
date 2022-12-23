import { PlayerStatusEnum } from '../../../core/enums/player-status.enum';

export const STATUS_LEGENDS: Record<PlayerStatusEnum, string> = {
  [PlayerStatusEnum.WOLF_TARGET]: `Ce joueur est la cible des loups-garous pour cette nuit. A la fin de la nuit il mourra.`,
  [PlayerStatusEnum.HEALTH_POTION]: `La sorcière a toujours sa potion de vie.`,
  [PlayerStatusEnum.DEATH_POTION]: `La sorcière a toujours sa potion de mort.`,
  [PlayerStatusEnum.CAPTAIN]: `Ce joueur est actuellement le capitaine, son vote pendant le jour compte double.`,
  [PlayerStatusEnum.LOVER]: `Ce joueur fait partie du couple d'amoureux.`,
  [PlayerStatusEnum.CHARMED]: `Ce joueur a été charmé par le joueur de flûte.`,
  [PlayerStatusEnum.RAVEN]: `Ce joueur est actuellement accusé par le corbeau, il a 2 votes contre lui en plus.`,
  [PlayerStatusEnum.CHILD_MODEL]: `Ce joueur est le modèle de l'enfant sauvage. S'il meurt alors l'enfant sauvage devient un loup-garou.`,
  [PlayerStatusEnum.PROTECTED]: `Ce joueur est actuellement protégé par le Salvateur.`,
  [PlayerStatusEnum.NO_POWER]: `Ce joueur a perdu son pouvoir. Par exemple pour le Renard, il ne peut plus renifler.`,
};
