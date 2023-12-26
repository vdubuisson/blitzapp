import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { VictoryEnum } from '../../enums/victory.enum';
import { Player } from '../../models/player.model';
import {
  AmoureuxVictoryHandler,
  JoueurFluteVictoryHandler,
  LoupBlancVictoryHandler,
  LoupGarouVictoryHandler,
  NoneVictoryHandler,
  VillageoisVictoryHandler,
} from '../../victory-handlers';
import { VictoryHandler } from '../../victory-handlers/victory.handler';
import { StorageService } from '../storage/storage.service';
import { LOUPS_GAROUS_ROLES } from '../../configs/loups-garous-roles';
import { AngeVictoryHandler } from '../../victory-handlers/ange/ange-victory.handler';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersService {
  private readonly victoryHandlers = new Map<VictoryEnum, VictoryHandler>();

  private readonly victoryPriorities: VictoryEnum[] = [
    VictoryEnum.NONE,
    VictoryEnum.ANGE,
    VictoryEnum.AMOUREUX,
    VictoryEnum.LOUP_BLANC,
    VictoryEnum.JOUEUR_FLUTE,
    VictoryEnum.LOUP_GAROU,
    VictoryEnum.VILLAGEOIS,
  ];

  private readonly HANDLERS_KEY = 'VictoryHandlersService_handlers';

  constructor(private storageService: StorageService) {
    this.initFromStorage();
  }

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.storageService.set(this.HANDLERS_KEY, roles);

    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);

    this.victoryHandlers.set(VictoryEnum.NONE, new NoneVictoryHandler());
    this.victoryHandlers.set(
      VictoryEnum.VILLAGEOIS,
      new VillageoisVictoryHandler(),
    );

    if (LOUPS_GAROUS_ROLES.some((role) => rolesSet.has(role))) {
      this.victoryHandlers.set(
        VictoryEnum.LOUP_GAROU,
        new LoupGarouVictoryHandler(),
      );
    }
    if (rolesSet.has(PlayerRoleEnum.CUPIDON)) {
      this.victoryHandlers.set(
        VictoryEnum.AMOUREUX,
        new AmoureuxVictoryHandler(),
      );
    }
    if (rolesSet.has(PlayerRoleEnum.JOUEUR_FLUTE)) {
      this.victoryHandlers.set(
        VictoryEnum.JOUEUR_FLUTE,
        new JoueurFluteVictoryHandler(),
      );
    }
    if (rolesSet.has(PlayerRoleEnum.LOUP_BLANC)) {
      this.victoryHandlers.set(
        VictoryEnum.LOUP_BLANC,
        new LoupBlancVictoryHandler(),
      );
    }
    if (rolesSet.has(PlayerRoleEnum.ANGE)) {
      this.victoryHandlers.set(VictoryEnum.ANGE, new AngeVictoryHandler());
    }
  }

  removeUselessHandlers(players: Player[]): void {
    if (
      this.victoryHandlers.has(VictoryEnum.AMOUREUX) &&
      players
        .filter((player) => player.statuses.has(PlayerStatusEnum.LOVER))
        .some((player) => player.isDead)
    ) {
      this.victoryHandlers.delete(VictoryEnum.AMOUREUX);
    }
    if (
      this.victoryHandlers.has(VictoryEnum.JOUEUR_FLUTE) &&
      players.find((player) => player.role === PlayerRoleEnum.JOUEUR_FLUTE)
        ?.isDead
    ) {
      this.victoryHandlers.delete(VictoryEnum.JOUEUR_FLUTE);
    }
    if (
      this.victoryHandlers.has(VictoryEnum.LOUP_BLANC) &&
      players.find((player) => player.role === PlayerRoleEnum.LOUP_BLANC)
        ?.isDead
    ) {
      this.victoryHandlers.delete(VictoryEnum.LOUP_BLANC);
    }
  }

  getVictory(
    players: Player[],
    isFirstDayOrNight: boolean,
  ): VictoryEnum | undefined {
    let resultVictory: VictoryEnum | undefined;
    for (const victoryEnum of this.victoryPriorities) {
      const victoryHandler = this.victoryHandlers.get(victoryEnum);
      if (victoryHandler?.isVictorious(players, isFirstDayOrNight)) {
        resultVictory = victoryEnum;
        break;
      }
    }
    return resultVictory;
  }

  clearHandlers(): void {
    this.victoryHandlers.clear();
    this.storageService.remove(this.HANDLERS_KEY);
  }

  private initFromStorage(): void {
    this.storageService
      .get<PlayerRoleEnum[]>(this.HANDLERS_KEY)
      .subscribe((storedRoles) => {
        if (storedRoles !== null) {
          this.initHandlers(storedRoles);
        }
      });
  }
}
