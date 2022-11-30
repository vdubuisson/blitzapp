import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import {
  VillageoisRoundHandler,
  CapitaineRoundHandler,
  LoupGarouRoundHandler,
  SorciereHealthRoundHandler,
  SorciereKillRoundHandler,
  CupidonRoundHandler,
  ChasseurRoundHandler,
} from '../../round-handlers';
import { RoundHandler } from '../../round-handlers/round-handler.interface';

@Injectable({
  providedIn: 'root',
})
export class RoundHandlersService {
  roundHandlers: Map<RoundEnum, RoundHandler> = new Map();

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.roundHandlers.clear();

    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);

    this.roundHandlers.set(RoundEnum.VILLAGEOIS, new VillageoisRoundHandler());
    this.roundHandlers.set(RoundEnum.CAPITAINE, new CapitaineRoundHandler());

    rolesSet.forEach((role) => {
      switch (role) {
        case PlayerRoleEnum.LOUP_GAROU:
          this.roundHandlers.set(
            RoundEnum.LOUP_GAROU,
            new LoupGarouRoundHandler()
          );
          break;
        case PlayerRoleEnum.SORCIERE:
          this.roundHandlers.set(
            RoundEnum.SORCIERE_HEALTH,
            new SorciereHealthRoundHandler()
          );
          this.roundHandlers.set(
            RoundEnum.SORCIERE_KILL,
            new SorciereKillRoundHandler()
          );
          break;
        case PlayerRoleEnum.CUPIDON:
          this.roundHandlers.set(RoundEnum.CUPIDON, new CupidonRoundHandler());
          break;
        case PlayerRoleEnum.CHASSEUR:
          this.roundHandlers.set(
            RoundEnum.CHASSEUR,
            new ChasseurRoundHandler()
          );
          break;
        default:
          break;
      }
    });
  }

  getHandler(round: RoundEnum): RoundHandler | undefined {
    return this.roundHandlers.get(round);
  }
}
