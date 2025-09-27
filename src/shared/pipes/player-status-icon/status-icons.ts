import { PlayerStatus } from '@/types/player-status';

export const STATUS_ICONS: Record<PlayerStatus, string> = {
  [PlayerStatus.WOLF_TARGET]: '🐺',
  [PlayerStatus.HEALTH_POTION]: '💚',
  [PlayerStatus.DEATH_POTION]: '🖤',
  [PlayerStatus.CAPTAIN]: '🎖️',
  [PlayerStatus.LOVER]: '💕',
  [PlayerStatus.INJURED]: '🤕',
  [PlayerStatus.PROTECTED]: '🛡️',
  [PlayerStatus.NO_POWER]: '❌',
  [PlayerStatus.CHARMED]: '🎶',
  [PlayerStatus.CHILD_MODEL]: '👶',
  [PlayerStatus.RAVEN]: '🪶',
  [PlayerStatus.NO_VOTE]: '🤐',
  [PlayerStatus.RUSTY_SWORD]: '🗡️',
  [PlayerStatus.BLUE_TEAM]: '🔵',
  [PlayerStatus.RED_TEAM]: '🔴',
  // [PlayerStatusEnum.COMEDIAN]: "🎭",
  [PlayerStatus.INFECTED]: '🩸',
  [PlayerStatus.DEVOURED]: '☠️',
};
