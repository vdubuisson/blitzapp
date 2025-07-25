import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { NeedCleanAfterBoucStore } from '@/stores/need-clean-after-bouc/need-clean-after-bouc.store';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

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
      this.roundHandlersService.removeHandler(RoundEnum.BOUC);
    }
    return players;
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (this.needCleanAfterBouc()) {
      const newPlayers = [...players];

      newPlayers
        .filter(
          (player) =>
            player.statuses.has(PlayerStatusEnum.NO_VOTE) &&
            (player.role !== PlayerRoleEnum.IDIOT ||
              player.killedBy === undefined),
        )
        .forEach((player) => player.statuses.delete(PlayerStatusEnum.NO_VOTE));

      this.needCleanAfterBouc.set(false);

      return newPlayers;
    }
    return players;
  }
}
