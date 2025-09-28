import { PlayerStatus, PlayerStatusEnum } from '@/types/player-status';
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
  [PlayerStatusEnum.WOLF_TARGET]: WolfTargetStatusHandler,
  [PlayerStatusEnum.HEALTH_POTION]: DefaultStatusHandler,
  [PlayerStatusEnum.DEATH_POTION]: DefaultStatusHandler,
  [PlayerStatusEnum.CAPTAIN]: CaptainStatusHandler,
  [PlayerStatusEnum.LOVER]: LoverStatusHandler,
  [PlayerStatusEnum.INJURED]: DefaultStatusHandler,
  [PlayerStatusEnum.PROTECTED]: DefaultStatusHandler,
  [PlayerStatusEnum.NO_POWER]: DefaultStatusHandler,
  [PlayerStatusEnum.CHARMED]: DefaultStatusHandler,
  [PlayerStatusEnum.CHILD_MODEL]: ChildModelStatusHandler,
  [PlayerStatusEnum.RAVEN]: DefaultStatusHandler,
  [PlayerStatusEnum.NO_VOTE]: DefaultStatusHandler,
  [PlayerStatusEnum.RUSTY_SWORD]: RustySwordStatusHandler,
  [PlayerStatusEnum.BLUE_TEAM]: DefaultStatusHandler,
  [PlayerStatusEnum.RED_TEAM]: DefaultStatusHandler,
  // [PlayerStatusEnum.COMEDIAN]: DefaultStatusHandler,
  [PlayerStatusEnum.INFECTED]: InfectedStatusHandler,
  [PlayerStatusEnum.DEVOURED]: DevouredStatusHandler,
};
