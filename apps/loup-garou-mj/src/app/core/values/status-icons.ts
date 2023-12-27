import { PlayerStatusEnum } from '../enums/player-status.enum';

export const STATUS_ICONS: Record<PlayerStatusEnum, string> = {
  [PlayerStatusEnum.WOLF_TARGET]: '🐺',
  [PlayerStatusEnum.HEALTH_POTION]: '💚',
  [PlayerStatusEnum.DEATH_POTION]: '🖤',
  [PlayerStatusEnum.CAPTAIN]: '🎖️',
  [PlayerStatusEnum.LOVER]: '💕',
  [PlayerStatusEnum.FIRST_DEATH]: '☠️',
  [PlayerStatusEnum.PROTECTED]: '🛡️',
  [PlayerStatusEnum.NO_POWER]: '❌',
  [PlayerStatusEnum.CHARMED]: '🎶',
  [PlayerStatusEnum.CHILD_MODEL]: '👶',
  [PlayerStatusEnum.RAVEN]: '🪶',
  [PlayerStatusEnum.NO_VOTE]: '🤐',
  // [PlayerStatusEnum.RUSTY_SWORD]: "🗡️",
  // [PlayerStatusEnum.COMEDIAN]: "🎭",
  // [PlayerStatusEnum.INFECTED]: "🩸",
};
