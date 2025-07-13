import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class BoucRoleHandler extends DefaultRoleHandler {
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;

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
}
