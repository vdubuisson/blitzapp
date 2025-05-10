import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoleHandler } from '../role-handler.interface';
import { Player } from '@/models/player.model';
import { RoundEnum } from '@/enums/round.enum';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { inject } from '@angular/core';

export class DefaultRoleHandler implements RoleHandler {
  public static readonly ROUNDS: RoundEnum[] = [];
  protected readonly roundHandlersService = inject(RoundHandlersService);

  constructor(
    public readonly role: PlayerRoleEnum,
    protected readonly rounds: RoundEnum[] = DefaultRoleHandler.ROUNDS,
  ) {}

  prepareNewGame(players: Player[]): Player[] {
    this.initRoundHandlers();
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
}
