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
  VoyanteRoundHandler,
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
        case PlayerRoleEnum.VOYANTE:
          this.roundHandlers.set(RoundEnum.VOYANTE, new VoyanteRoundHandler());
          break;
        default:
          break;
      }
    });
  }

  getHandler(round: RoundEnum): RoundHandler | undefined {
    return this.roundHandlers.get(round);
  }

  removeHandlers(roles: PlayerRoleEnum[]): void {
    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);
    rolesSet.forEach((role) => {
      switch (role) {
        case PlayerRoleEnum.LOUP_GAROU:
          this.roundHandlers.delete(RoundEnum.LOUP_GAROU);
          break;
        case PlayerRoleEnum.SORCIERE:
          this.roundHandlers.delete(RoundEnum.SORCIERE_HEALTH);
          this.roundHandlers.delete(RoundEnum.SORCIERE_KILL);
          break;
        case PlayerRoleEnum.CUPIDON:
          this.roundHandlers.delete(RoundEnum.CUPIDON);
          break;
        case PlayerRoleEnum.CHASSEUR:
          this.roundHandlers.delete(RoundEnum.CHASSEUR);
          break;
        case PlayerRoleEnum.VOYANTE:
          this.roundHandlers.delete(RoundEnum.VOYANTE);
          break;
        default:
          break;
      }
    });
  }
}
