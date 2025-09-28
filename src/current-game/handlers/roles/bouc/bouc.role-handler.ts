import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { NeedCleanAfterBoucStore } from '@/current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';
import { PlayerStatusEnum } from '@/types/player-status';
import { removeStatusFromPlayersById } from '@/utils/status.utils';

export class BoucRoleHandler extends DefaultRoleHandler {
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;
  private readonly needCleanAfterBouc = inject(NeedCleanAfterBoucStore).state;

  constructor() {
    super(PlayerRoleEnum.BOUC, ROLE_METADATA_CONFIG[PlayerRoleEnum.BOUC]!);
  }

  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    if (deadPlayer.killedBy === undefined) {
      this.afterDeathRoundQueue.update((queue) => [...queue, RoundEnum.BOUC]);
    } else {
      this.roundHandlersManager.removeHandler(RoundEnum.BOUC);
    }
    return players;
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (this.needCleanAfterBouc()) {
      const ids = players.reduce<number[]>(
        (acc, player) =>
          player.role !== PlayerRoleEnum.IDIOT || player.killedBy === undefined
            ? [...acc, player.id]
            : acc,
        [],
      );

      this.needCleanAfterBouc.set(false);

      return removeStatusFromPlayersById(
        players,
        PlayerStatusEnum.NO_VOTE,
        ids,
      );
    }
    return players;
  }
}
