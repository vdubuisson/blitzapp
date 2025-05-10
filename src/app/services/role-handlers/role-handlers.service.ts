import {
  inject,
  Injectable,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoleHandler } from '@/role-handlers/role-handler.interface';
import { Player } from '@/models/player.model';
import { ROLE_HANDLERS_CONFIG } from '@/configs/role-handlers.config';

@Injectable({
  providedIn: 'root',
})
export class RoleHandlersService {
  private readonly injector = inject(Injector);

  private readonly currentPlayersState =
    inject(CurrentPlayersStore).state.asReadonly();

  private readonly roleHandlers = new Map<PlayerRoleEnum, RoleHandler>();

  constructor() {
    const currentPlayers = this.currentPlayersState();
    if (currentPlayers.length > 0) {
      this.initHandlers(currentPlayers);
    }
  }

  /**
   * Initializes the role handlers based on the provided players.
   *
   * @param players - Players present in the game.
   */
  initHandlers(players: Player[]): void {
    runInInjectionContext(this.injector, () => {
      players.forEach((player) => {
        const playerRole = player.role;
        if (!this.roleHandlers.has(playerRole)) {
          const roleHandler = this.createRoleHandler(playerRole);
          this.roleHandlers.set(playerRole, roleHandler);
        }
      });
    });
  }

  /**
   * Returns the role handler for the specified player role.
   *
   * @param role - The player role for which to retrieve the handler.
   * @returns The corresponding role handler.
   */
  getHandler(role: PlayerRoleEnum): RoleHandler {
    if (this.roleHandlers.has(role)) {
      return this.roleHandlers.get(role)!;
    } else {
      throw new Error(`RoleHandler for ${role} not initialized`);
    }
  }

  /**
   * Clears all role handlers.
   */
  clearHandlers(): void {
    this.roleHandlers.clear();
  }

  private createRoleHandler(role: PlayerRoleEnum): RoleHandler {
    if (ROLE_HANDLERS_CONFIG[role] !== undefined) {
      return new ROLE_HANDLERS_CONFIG[role]();
    } else {
      throw new Error(`Missing RoleHandler config for ${role}`);
    }
  }
}
