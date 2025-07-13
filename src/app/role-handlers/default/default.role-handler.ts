import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoleHandler } from '../role-handler.interface';
import { Player } from '@/models/player.model';
import { RoundEnum } from '@/enums/round.enum';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { inject } from '@angular/core';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { VictoryEnum } from '@/enums/victory.enum';

export class DefaultRoleHandler implements RoleHandler {
  public static readonly ROUNDS: RoundEnum[] = [];
  public static readonly STATUSES: PlayerStatusEnum[] = [];
  public static readonly VICTORIES: VictoryEnum[] = [];

  protected readonly roundHandlersService = inject(RoundHandlersService);
  protected readonly statusHandlersService = inject(StatusHandlersService);
  protected readonly victoryHandlersService = inject(VictoryHandlersService);

  constructor(
    public readonly role: PlayerRoleEnum,
    protected readonly rounds: RoundEnum[] = DefaultRoleHandler.ROUNDS,
    protected readonly statuses: PlayerStatusEnum[] = DefaultRoleHandler.STATUSES,
    protected readonly victories: VictoryEnum[] = DefaultRoleHandler.VICTORIES,
  ) {}

  prepareNewGame(players: Player[]): Player[] {
    this.initRoundHandlers();
    this.initStatusHandlers();
    this.initVictoryHandlers();
    return players;
  }

  handleDeath(players: Player[], deadPlayer: Player): Player[] {
    this.rounds.forEach((round) =>
      this.roundHandlersService.removeHandler(round),
    );
    return players;
  }

  cleanStatusesAfterDay(players: Player[]): Player[] {
    return players;
  }

  protected initRoundHandlers(): void {
    this.rounds.forEach((round) =>
      this.roundHandlersService.createRoundHandler(round),
    );
  }

  protected initStatusHandlers(): void {
    this.statuses.forEach((status) =>
      this.statusHandlersService.createStatusHandler(status),
    );
  }

  protected initVictoryHandlers(): void {
    this.victories.forEach((victory) =>
      this.victoryHandlersService.createVictoryHandler(victory),
    );
  }
}
