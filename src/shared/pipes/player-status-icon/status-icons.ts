import { PlayerStatus, PlayerStatusEnum } from '@/types/player-status';

export const STATUS_ICONS: Record<PlayerStatus, string> = {
  [PlayerStatusEnum.WOLF_TARGET]: '🐺',
  [PlayerStatusEnum.HEALTH_POTION]: '💚',
  [PlayerStatusEnum.DEATH_POTION]: '🖤',
  [PlayerStatusEnum.CAPTAIN]: '🎖️',
  [PlayerStatusEnum.LOVER]: '💕',
  [PlayerStatusEnum.INJURED]: '🤕',
  [PlayerStatusEnum.PROTECTED]: '🛡️',
  [PlayerStatusEnum.NO_POWER]: '❌',
  [PlayerStatusEnum.CHARMED]: '🎶',
  [PlayerStatusEnum.CHILD_MODEL]: '👶',
  [PlayerStatusEnum.RAVEN]: '🪶',
  [PlayerStatusEnum.NO_VOTE]: '🤐',
  [PlayerStatusEnum.RUSTY_SWORD]: '🗡️',
  [PlayerStatusEnum.BLUE_TEAM]: '🔵',
  [PlayerStatusEnum.RED_TEAM]: '🔴',
  // [PlayerStatusEnum.COMEDIAN]: "🎭",
  [PlayerStatusEnum.INFECTED]: '🩸',
  [PlayerStatusEnum.DEVOURED]: '☠️',
};
