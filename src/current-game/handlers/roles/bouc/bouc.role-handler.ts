import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { NeedCleanAfterBoucStore } from '@/current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class BoucRoleHandler extends DefaultRoleHandler {
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;
  private readonly needCleanAfterBouc = inject(NeedCleanAfterBoucStore).state;
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

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

      return this.playersStatusUtility.removeStatusFromPlayersById(
        players,
        PlayerStatusEnum.NO_VOTE,
        ids,
      );
    }
    return players;
  }
}
