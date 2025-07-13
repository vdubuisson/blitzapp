import { RoleMetadata } from '@/configs/role-metadata.config';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { inject } from '@angular/core';

export class DefaultRoleHandler {
  protected readonly roundHandlersService = inject(RoundHandlersService);
  protected readonly statusHandlersService = inject(StatusHandlersService);
  protected readonly victoryHandlersService = inject(VictoryHandlersService);

  constructor(
    public readonly role: PlayerRoleEnum,
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
      this.roundHandlersService.removeHandler(round),
    );
    return players;
  }

  cleanStatusesAfterDay(players: Player[]): Player[] {
    return players;
  }

  protected initRoundHandlers(): void {
    this.metadata.rounds.forEach((round) =>
      this.roundHandlersService.createRoundHandler(round),
    );
  }

  protected initStatusHandlers(): void {
    this.metadata.statuses.forEach((status) =>
      this.statusHandlersService.createStatusHandler(status),
    );
  }

  protected initVictoryHandlers(): void {
    this.metadata.victories.forEach((victory) =>
      this.victoryHandlersService.createVictoryHandler(victory),
    );
  }
}
