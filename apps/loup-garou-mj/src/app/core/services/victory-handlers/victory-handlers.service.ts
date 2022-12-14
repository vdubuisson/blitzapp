import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { VictoryEnum } from '../../enums/victory.enum';
import { Player } from '../../models/player.model';
import {
  NoneVictoryHandler,
  VillageoisVictoryHandler,
  LoupGarouVictoryHandler,
  AmoureuxVictoryHandler,
  JoueurFluteVictoryHandler,
} from '../../victory-handlers';
import { VictoryHandler } from '../../victory-handlers/victory.handler';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersService {
  private readonly victoryHandlers = new Map<VictoryEnum, VictoryHandler>();

  private readonly victoryPriorities: VictoryEnum[] = [
    VictoryEnum.NONE,
    VictoryEnum.AMOUREUX,
    VictoryEnum.JOUEUR_FLUTE,
    VictoryEnum.LOUP_GAROU,
    VictoryEnum.VILLAGEOIS,
  ];

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.victoryHandlers.clear();

    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);

    this.victoryHandlers.set(VictoryEnum.NONE, new NoneVictoryHandler());
    this.victoryHandlers.set(
      VictoryEnum.VILLAGEOIS,
      new VillageoisVictoryHandler()
    );

    if (rolesSet.has(PlayerRoleEnum.LOUP_GAROU)) {
      this.victoryHandlers.set(
        VictoryEnum.LOUP_GAROU,
        new LoupGarouVictoryHandler()
      );
    }
    if (rolesSet.has(PlayerRoleEnum.CUPIDON)) {
      this.victoryHandlers.set(
        VictoryEnum.AMOUREUX,
        new AmoureuxVictoryHandler()
      );
    }
    if (rolesSet.has(PlayerRoleEnum.JOUEUR_FLUTE)) {
      this.victoryHandlers.set(
        VictoryEnum.JOUEUR_FLUTE,
        new JoueurFluteVictoryHandler()
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
  }

  getVictory(players: Player[]): VictoryEnum | undefined {
    let resultVictory: VictoryEnum | undefined;
    for (const victoryEnum of this.victoryPriorities) {
      const victoryHandler = this.victoryHandlers.get(victoryEnum);
      if (
        victoryHandler !== undefined &&
        victoryHandler.isVictorious(players)
      ) {
        resultVictory = victoryEnum;
        break;
      }
    }
    return resultVictory;
  }
}
