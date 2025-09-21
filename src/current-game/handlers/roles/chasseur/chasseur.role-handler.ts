import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { inject } from '@angular/core';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class ChasseurRoleHandler extends DefaultRoleHandler {
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;

  constructor() {
    super(PlayerRole.CHASSEUR, ROLE_METADATA_CONFIG[PlayerRole.CHASSEUR]!);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    this.afterDeathRoundQueue.update((queue) => [Round.CHASSEUR, ...queue]);
    return players;
  }
}
