import { PlayerStatus } from '@/types/player-status';
import { CaptainStatusHandler } from '@/game-handlers/status/captain/captain.status-handler';
import { ChildModelStatusHandler } from '@/game-handlers/status/child-model/child-model.status-handler';
import { DefaultStatusHandler } from '@/game-handlers/status/default/default.status-handler';
import { DevouredStatusHandler } from '@/game-handlers/status/devoured/devoured.status-handler';
import { InfectedStatusHandler } from '@/game-handlers/status/infected/infected.status-handler';
import { LoverStatusHandler } from '@/game-handlers/status/lover/lover.status-handler';
import { RustySwordStatusHandler } from '@/game-handlers/status/rusty-sword/rusty-sword.status-handler';
import { StatusHandler } from '@/game-handlers/status/status-handler.interface';
import { WolfTargetStatusHandler } from '@/game-handlers/status/wolf-target/wolf-target.status-handler';

export const STATUS_HANDLERS: Record<PlayerStatus, new () => StatusHandler> = {
  [PlayerStatus.WOLF_TARGET]: WolfTargetStatusHandler,
  [PlayerStatus.HEALTH_POTION]: DefaultStatusHandler,
  [PlayerStatus.DEATH_POTION]: DefaultStatusHandler,
  [PlayerStatus.CAPTAIN]: CaptainStatusHandler,
  [PlayerStatus.LOVER]: LoverStatusHandler,
  [PlayerStatus.INJURED]: DefaultStatusHandler,
  [PlayerStatus.PROTECTED]: DefaultStatusHandler,
  [PlayerStatus.NO_POWER]: DefaultStatusHandler,
  [PlayerStatus.CHARMED]: DefaultStatusHandler,
  [PlayerStatus.CHILD_MODEL]: ChildModelStatusHandler,
  [PlayerStatus.RAVEN]: DefaultStatusHandler,
  [PlayerStatus.NO_VOTE]: DefaultStatusHandler,
  [PlayerStatus.RUSTY_SWORD]: RustySwordStatusHandler,
  [PlayerStatus.BLUE_TEAM]: DefaultStatusHandler,
  [PlayerStatus.RED_TEAM]: DefaultStatusHandler,
  // [PlayerStatusEnum.COMEDIAN]: DefaultStatusHandler,
  [PlayerStatus.INFECTED]: InfectedStatusHandler,
  [PlayerStatus.DEVOURED]: DevouredStatusHandler,
};
