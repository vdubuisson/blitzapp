import { ROLE_STATUSES_CONFIG } from '@/configs/role-statuses.config';
import { STATUS_HANDLERS_CONFIG } from '@/configs/status-handlers.config';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '@/status-handlers/default/default.status-handler';
import { StatusHandler } from '@/status-handlers/status-handler.interface';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import {
  inject,
  Injectable,
  Injector,
  runInInjectionContext,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusHandlersService {
  private readonly injector = inject(Injector);

  private readonly currentPlayersState =
    inject(CurrentPlayersStore).state.asReadonly();

  private readonly statusHandlers = new Map<PlayerStatusEnum, StatusHandler>();

  private readonly defaultStatusHandler: StatusHandler =
    new DefaultStatusHandler();

  constructor() {
    const currentPlayers = this.currentPlayersState();
    if (currentPlayers.length > 0) {
      this.initHandlers(currentPlayers);
    }
  }

  /**
   * Initializes the status handlers based on the provided players.
   *
   * @param players - Players present in the game.
   */
  initHandlers(players: Player[]): void {
    runInInjectionContext(this.injector, () => {
      const captainStatusHandler = this.createStatusHandler(
        PlayerStatusEnum.CAPTAIN,
      );
      this.statusHandlers.set(PlayerStatusEnum.CAPTAIN, captainStatusHandler);

      players.forEach((player) => {
        ROLE_STATUSES_CONFIG[player.role]?.forEach((status) => {
          if (!this.statusHandlers.has(status)) {
            const statusHandler = this.createStatusHandler(status);
            this.statusHandlers.set(status, statusHandler);
          }
        });
      });
    });
  }

  /**
   * Returns the status handler for the specified player status.
   *
   * @param status - The player status for which to retrieve the handler.
   * @returns The corresponding status handler.
   */
  getHandler(status: PlayerStatusEnum): StatusHandler {
    if (this.statusHandlers.has(status)) {
      return this.statusHandlers.get(status)!;
    } else {
      throw new Error(`StatusHandler for ${status} not initialized`);
    }
  }

  /**
   * Clears all status handlers.
   */
  clearHandlers(): void {
    this.statusHandlers.clear();
  }

  private createStatusHandler(status: PlayerStatusEnum): StatusHandler {
    const statusHandlerClass = STATUS_HANDLERS_CONFIG[status];
    if (statusHandlerClass !== undefined) {
      if (statusHandlerClass.name === DefaultStatusHandler.name) {
        // Reuse the default status handler instance
        return this.defaultStatusHandler;
      }
      return new statusHandlerClass();
    } else {
      throw new Error(`Missing StatusHandler config for ${status}`);
    }
  }
}
