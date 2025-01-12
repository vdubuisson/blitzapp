import { LOUPS_GAROUS_ROLES } from '@/configs/loups-garous-roles';
import { VICTORIES_PRIORITY_CONFIG } from '@/configs/victories-priority.config';
import { VICTORY_HANDLERS_CONFIG } from '@/configs/victory-handlers.config';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { Player } from '@/models/player.model';
import { VictoryHandlersStore } from '@/stores/victory-handlers/victory-handlers.store';
import { VictoryHandler } from '@/victory-handlers/victory.handler';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersService {
  private readonly victoryHandlers = new Map<VictoryEnum, VictoryHandler>();

  private readonly victoryHandlersState = inject(VictoryHandlersStore).state;

  private readonly victoryPriorities = VICTORIES_PRIORITY_CONFIG;

  constructor() {
    this.victoryHandlersState().forEach((victory) =>
      this.createVictoryHandler(victory),
    );
  }

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.victoryHandlers.clear();
    const rolesSet = new Set<PlayerRoleEnum>(roles);

    this.createVictoryHandler(VictoryEnum.NONE);
    this.createVictoryHandler(VictoryEnum.VILLAGEOIS);

    if (LOUPS_GAROUS_ROLES.some((role) => rolesSet.has(role))) {
      this.createVictoryHandler(VictoryEnum.LOUP_GAROU);
    }
    if (rolesSet.has(PlayerRoleEnum.CUPIDON)) {
      this.createVictoryHandler(VictoryEnum.AMOUREUX);
    }
    if (rolesSet.has(PlayerRoleEnum.JOUEUR_FLUTE)) {
      this.createVictoryHandler(VictoryEnum.JOUEUR_FLUTE);
    }
    if (rolesSet.has(PlayerRoleEnum.LOUP_BLANC)) {
      this.createVictoryHandler(VictoryEnum.LOUP_BLANC);
    }
    if (rolesSet.has(PlayerRoleEnum.ANGE)) {
      this.createVictoryHandler(VictoryEnum.ANGE);
    }
    if (rolesSet.has(PlayerRoleEnum.SECTAIRE)) {
      this.createVictoryHandler(VictoryEnum.SECTAIRE);
    }

    this.syncState();
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

    this.syncState();
  }

  removeHandler(victory: VictoryEnum) {
    this.victoryHandlers.delete(victory);
    this.syncState();
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
    this.syncState();
  }

  private createVictoryHandler(victory: VictoryEnum): void {
    if (VICTORY_HANDLERS_CONFIG[victory] !== undefined) {
      this.victoryHandlers.set(victory, new VICTORY_HANDLERS_CONFIG[victory]());
    }
  }

  private syncState(): void {
    this.victoryHandlersState.set(new Set(this.victoryHandlers.keys()));
  }
}
