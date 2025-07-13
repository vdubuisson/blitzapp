import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { inject } from '@angular/core';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class BoucRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.BOUC];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.NO_VOTE,
  ];

  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;

  constructor() {
    super(
      PlayerRoleEnum.BOUC,
      BoucRoleHandler.ROUNDS,
      BoucRoleHandler.STATUSES,
    );
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
