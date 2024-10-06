import { inject, Injectable } from '@angular/core';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { Player } from '@/models/player.model';
import { VictoryHandler } from '@/victory-handlers/victory.handler';
import { StorageService } from '@/services/storage/storage.service';
import { LOUPS_GAROUS_ROLES } from '@/configs/loups-garous-roles';
import { AngeVictoryHandler } from '@/victory-handlers/ange/ange-victory.handler';
import { VICTORIES_PRIORITY_CONFIG } from '@/configs/victories-priority.config';
import { SectaireVictoryHandler } from '@/victory-handlers/sectaire/sectaire-victory.handler';
import { AmoureuxVictoryHandler } from '@/victory-handlers/amoureux/amoureux-victory.handler';
import { JoueurFluteVictoryHandler } from '@/victory-handlers/joueur-flute/joueur-flute-victory.handler';
import { LoupBlancVictoryHandler } from '@/victory-handlers/loup-blanc/loup-blanc-victory.handler';
import { LoupGarouVictoryHandler } from '@/victory-handlers/loup-garou/loup-garou-victory.handler';
import { NoneVictoryHandler } from '@/victory-handlers/none/none-victory.handler';
import { VillageoisVictoryHandler } from '@/victory-handlers/villageois/villageois-victory.handler';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersService {
  private readonly storageService = inject(StorageService);

  private readonly victoryHandlers = new Map<VictoryEnum, VictoryHandler>();

  private readonly victoryPriorities = VICTORIES_PRIORITY_CONFIG;

  private readonly HANDLERS_KEY = 'VictoryHandlersService_handlers';

  constructor() {
    this.initFromStorage();
  }

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.storageService.set(this.HANDLERS_KEY, roles);

    const rolesSet = new Set<PlayerRoleEnum>(roles);

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
    if (rolesSet.has(PlayerRoleEnum.SECTAIRE)) {
      this.victoryHandlers.set(
        VictoryEnum.SECTAIRE,
        new SectaireVictoryHandler(),
      );
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
    if (
      this.victoryHandlers.has(VictoryEnum.SECTAIRE) &&
      players.find((player) => player.role === PlayerRoleEnum.SECTAIRE)?.isDead
    ) {
      this.victoryHandlers.delete(VictoryEnum.SECTAIRE);
    }
  }

  removeHandler(victory: VictoryEnum) {
    this.victoryHandlers.delete(victory);
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
