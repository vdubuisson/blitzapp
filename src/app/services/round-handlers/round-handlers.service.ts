import { inject, Injectable } from '@angular/core';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { StorageService } from '@/services/storage/storage.service';
import { ROLE_ROUNDS_CONFIG } from '@/configs/role-rounds.config';
import { ModalService } from '@/services/modal/modal.service';
import { ROUND_HANDLERS_CONFIG } from '@/configs/round-handlers.config';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';

@Injectable({
  providedIn: 'root',
})
export class RoundHandlersService {
  private readonly announcementService = inject(AnnouncementService);
  private readonly modalService = inject(ModalService);
  private readonly storageService = inject(StorageService);

  private readonly roundHandlers = new Map<RoundEnum, RoundHandler>();

  private readonly HANDLERS_KEY = 'RoundHandlersService_handlers';
  private readonly DEFAULT_HANDLERS_KEY =
    'RoundHandlersService_defaultHandlers';

  constructor() {
    this.initFromStorage();
  }

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.storageService.set(this.HANDLERS_KEY, roles);

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

  initDefaultHandlers(roles: PlayerRoleEnum[]): void {
    this.storageService.set(this.DEFAULT_HANDLERS_KEY, roles);

    const rolesSet = new Set<PlayerRoleEnum>(roles);
    rolesSet.forEach((role) => {
      ROLE_ROUNDS_CONFIG[role].forEach((round) =>
        this.createDefaultRoundHandler(round),
      );
    });
  }

  getHandler(round: RoundEnum): RoundHandler | undefined {
    return this.roundHandlers.get(round);
  }

  removeHandlers(roles: PlayerRoleEnum[]): void {
    this.storageService
      .get<PlayerRoleEnum[]>(this.HANDLERS_KEY)
      .subscribe((storedRoles) => {
        if (storedRoles !== null) {
          const newRoles = storedRoles.filter((role) => !roles.includes(role));
          this.storageService.set(this.HANDLERS_KEY, newRoles);
        }
      });

    const rolesSet = new Set<PlayerRoleEnum>(roles);
    rolesSet.forEach((role) => {
      ROLE_ROUNDS_CONFIG[role].forEach((round) =>
        this.roundHandlers.delete(round),
      );
    });
  }

  clearHandlers(): void {
    this.roundHandlers.clear();
    this.storageService.remove(this.HANDLERS_KEY);
    this.storageService.remove(this.DEFAULT_HANDLERS_KEY);
  }

  private initFromStorage(): void {
    this.storageService
      .get<PlayerRoleEnum[]>(this.HANDLERS_KEY)
      .subscribe((roles) => {
        if (roles !== null) {
          this.initHandlers(roles);
        }
      });

    this.storageService
      .get<PlayerRoleEnum[]>(this.DEFAULT_HANDLERS_KEY)
      .subscribe((roles) => {
        if (roles !== null) {
          this.initDefaultHandlers(roles);
        }
      });
  }

  private createRoundHandler(round: RoundEnum): void {
    if (!this.roundHandlers.has(round)) {
      if (ROUND_HANDLERS_CONFIG[round] !== undefined) {
        const roundHandler = new ROUND_HANDLERS_CONFIG[round]({
          announcementService: this.announcementService,
          modalService: this.modalService,
        });
        this.roundHandlers.set(round, roundHandler);
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
      } else {
        throw new Error(`Missing RoundHandler config for ${round}`);
      }
    }
  }
}
