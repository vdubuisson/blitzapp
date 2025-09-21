import { RoleMetadata } from '@/config/role-metadata';
import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { inject } from '@angular/core';

export class DefaultRoleHandler {
  protected readonly roundHandlersManager = inject(RoundHandlersManager);
  protected readonly statusHandlersManager = inject(StatusHandlersManager);
  protected readonly victoryHandlersManager = inject(VictoryHandlersManager);

  constructor(
    public readonly role: PlayerRole,
    protected readonly metadata: RoleMetadata,
  ) {}

  prepareNewGame(players: Player[]): Player[] {
    this.initRoundHandlers();
    this.initStatusHandlers();
    this.initVictoryHandlers();
    return players;
  }

  handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.metadata.rounds.forEach((round) =>
      this.roundHandlersManager.removeHandler(round),
    );
    return players;
  }

  cleanStatusesAfterDay(players: Player[]): Player[] {
    return players;
  }

  protected initRoundHandlers(): void {
    this.metadata.rounds.forEach((round) =>
      this.roundHandlersManager.createRoundHandler(round),
    );
  }

  protected initStatusHandlers(): void {
    this.metadata.statuses.forEach((status) =>
      this.statusHandlersManager.createStatusHandler(status),
    );
  }

  protected initVictoryHandlers(): void {
    this.metadata.victories.forEach((victory) =>
      this.victoryHandlersManager.createVictoryHandler(victory),
    );
  }
}
