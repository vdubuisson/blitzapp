import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { inject } from '@angular/core';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class ChasseurRoleHandler extends DefaultRoleHandler {
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;

  constructor() {
    super(
      PlayerRoleEnum.CHASSEUR,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.CHASSEUR]!,
    );
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    this.afterDeathRoundQueue.update((queue) => [RoundEnum.CHASSEUR, ...queue]);
    return players;
  }
}
