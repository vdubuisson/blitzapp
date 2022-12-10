import { PlayerStatusEnum } from '../../../core/enums/player-status.enum';

export const STATUS_LEGENDS: Record<PlayerStatusEnum, string> = {
  [PlayerStatusEnum.WOLF_TARGET]: `Ce joueur est la cible des loups-garous pour cette nuit. A la fin de la nuit il mourra.`,
  [PlayerStatusEnum.HEALTH_POTION]: `La sorcière a toujours sa potion de vie.`,
  [PlayerStatusEnum.DEATH_POTION]: `La sorcière a toujours sa potion de mort.`,
  [PlayerStatusEnum.CAPTAIN]: `Ce joueur est actuellement le capitaine, son vote pendant le jour compte double.`,
  [PlayerStatusEnum.LOVER]: `Ce joueur fait partie du couple d'amoureux.`,
};
