import { ROLE_ROUNDS_CONFIG } from '@/configs/role-rounds.config';
import { ROUND_HANDLERS_CONFIG } from '@/configs/round-handlers.config';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { ModalService } from '@/services/modal/modal.service';
import { DefaultRoundHandlersStore } from '@/stores/default-round-handlers/default-round-handlers.store';
import { RoundHandlersStore } from '@/stores/round-handlers/round-handlers.store';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoundHandlersService {
  private readonly announcementService = inject(AnnouncementService);
  private readonly modalService = inject(ModalService);

  private readonly roundHandlers = new Map<RoundEnum, RoundHandler>();

  private readonly roundHandlersState = inject(RoundHandlersStore).state;
  private readonly defaultRoundHandlersState = inject(DefaultRoundHandlersStore)
    .state;

  constructor() {
    this.roundHandlersState().forEach((round) =>
      this.createRoundHandler(round),
    );
    this.defaultRoundHandlersState().forEach((round) =>
      this.createDefaultRoundHandler(round),
    );
  }

  /**
   * Initializes the round handlers based on the provided player roles.
   *
   * @param roles - Player roles present in the game.
   */
  initHandlers(roles: PlayerRoleEnum[]): void {
    const rolesSet = new Set<PlayerRoleEnum>(roles);

    this.createRoundHandler(RoundEnum.VILLAGEOIS);
    this.createRoundHandler(RoundEnum.LOUP_GAROU);
    this.createRoundHandler(RoundEnum.CAPITAINE);

    rolesSet.forEach((role) => {
      ROLE_ROUNDS_CONFIG[role].forEach((round) =>
        this.createRoundHandler(round),
      );
    });
  }

  /**
   * Initializes the default round handlers based on the provided player roles.
   *
   * @param roles - Player roles not played in the game.
   */
  initDefaultHandlers(roles: PlayerRoleEnum[]): void {
    const rolesSet = new Set<PlayerRoleEnum>(roles);
    rolesSet.forEach((role) => {
      ROLE_ROUNDS_CONFIG[role].forEach((round) =>
        this.createDefaultRoundHandler(round),
      );
    });
  }

  /**
   * Retrieves the round handler for a specific round.
   *
   * @param round - The round for which to retrieve the handler.
   * @returns The corresponding round handler or undefined if not found.
   */
  getHandler(round: RoundEnum): RoundHandler | undefined {
    return this.roundHandlers.get(round);
  }

  /**
   * Removes round handlers for the specified player roles.
   *
   * @param roles - The player roles for which to remove the handlers.
   */
  removeHandlers(roles: PlayerRoleEnum[]): void {
    const rolesSet = new Set<PlayerRoleEnum>(roles);
    rolesSet.forEach((role) => {
      ROLE_ROUNDS_CONFIG[role].forEach((round) => {
        this.roundHandlers.delete(round);
        if (this.roundHandlersState().has(round)) {
          this.roundHandlersState.update((state) => {
            state.delete(round);
            return new Set(state);
          });
        }
        if (this.defaultRoundHandlersState().has(round)) {
          this.defaultRoundHandlersState.update((state) => {
            state.delete(round);
            return new Set(state);
          });
        }
      });
    });
  }

  /**
   * Clears all round handlers.
   */
  clearHandlers(): void {
    this.roundHandlers.clear();
    this.roundHandlersState.set(new Set());
    this.defaultRoundHandlersState.set(new Set());
  }

  private createRoundHandler(round: RoundEnum): void {
    if (!this.roundHandlers.has(round)) {
      if (ROUND_HANDLERS_CONFIG[round] !== undefined) {
        const roundHandler = new ROUND_HANDLERS_CONFIG[round]({
          announcementService: this.announcementService,
          modalService: this.modalService,
        });
        this.roundHandlers.set(round, roundHandler);
        this.roundHandlersState.update((state) => new Set([...state, round]));
      } else {
        throw new Error(`Missing RoundHandler config for ${round}`);
      }
    }
  }

  private createDefaultRoundHandler(round: RoundEnum): void {
    if (!this.roundHandlers.has(round)) {
      if (ROUND_HANDLERS_CONFIG[round] !== undefined) {
        const roundHandler = new ROUND_HANDLERS_CONFIG[round]({});
        const defaultRoundHandler = new DefaultRoundHandler(
          round,
          true,
          roundHandler.isDuringDay,
        );
        this.roundHandlers.set(round, defaultRoundHandler);
        this.defaultRoundHandlersState.update(
          (state) => new Set([...state, round]),
        );
      } else {
        throw new Error(`Missing RoundHandler config for ${round}`);
      }
    }
  }
}
