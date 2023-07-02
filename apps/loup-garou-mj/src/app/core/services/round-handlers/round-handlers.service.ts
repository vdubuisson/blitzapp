import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { AnnouncementService } from '../announcement/announcement.service';
import { StorageService } from '../storage/storage.service';
import { ROUND_HANDLERS_CONFIG } from '../../configs/round-handlers.config';
import { ROLE_ROUNDS_CONFIG } from '../../configs/role-rounds.config';

@Injectable({
  providedIn: 'root',
})
export class RoundHandlersService {
  private readonly roundHandlers: Map<RoundEnum, RoundHandler> = new Map();

  private readonly HANDLERS_KEY = 'RoundHandlersService_handlers';

  constructor(
    private announcementService: AnnouncementService,
    private storageService: StorageService
  ) {
    this.initFromStorage();
  }

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.storageService.set(this.HANDLERS_KEY, roles);

    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);

    this.createRoundHandler(RoundEnum.VILLAGEOIS);
    this.createRoundHandler(RoundEnum.LOUP_GAROU);
    this.createRoundHandler(RoundEnum.CAPITAINE);

    rolesSet.forEach((role) => {
      ROLE_ROUNDS_CONFIG[role].forEach((round) =>
        this.createRoundHandler(round)
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

    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);
    rolesSet.forEach((role) => {
      ROLE_ROUNDS_CONFIG[role].forEach((round) =>
        this.roundHandlers.delete(round)
      );
    });
  }

  clearHandlers(): void {
    this.roundHandlers.clear();
    this.storageService.remove(this.HANDLERS_KEY);
  }

  private initFromStorage(): void {
    this.storageService
      .get<PlayerRoleEnum[]>(this.HANDLERS_KEY)
      .subscribe((roles) => {
        if (roles !== null) {
          this.initHandlers(roles);
        }
      });
  }

  private createRoundHandler(round: RoundEnum): void {
    if (!this.roundHandlers.has(round)) {
      this.roundHandlers.set(
        round,
        new ROUND_HANDLERS_CONFIG[round](this.announcementService)
      );
    }
  }
}
