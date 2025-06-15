import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { CaptainStatusHandler } from '@/status-handlers/captain/captain.status-handler';
import { ChildModelStatusHandler } from '@/status-handlers/child-model/child-model.status-handler';
import { DefaultStatusHandler } from '@/status-handlers/default/default.status-handler';
import { DevouredStatusHandler } from '@/status-handlers/devoured/devoured.status-handler';
import { InfectedStatusHandler } from '@/status-handlers/infected/infected.status-handler';
import { LoverStatusHandler } from '@/status-handlers/lover/lover.status-handler';
import { RustySwordStatusHandler } from '@/status-handlers/rusty-sword/rusty-sword.status-handler';
import { StatusHandler } from '@/status-handlers/status-handler.interface';
import { WolfTargetStatusHandler } from '@/status-handlers/wolf-target/wolf-target.status-handler';

export const STATUS_HANDLERS_CONFIG: Record<
  PlayerStatusEnum,
  new () => StatusHandler
> = {
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
