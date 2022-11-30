import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import { CapitaineRoundHandler } from '../../handlers/capitaine/capitaine-round.handler';
import { CupidonRoundHandler } from '../../handlers/cupidon/cupidon-round.handler';
import { LoupGarouRoundHandler } from '../../handlers/loup-garou/loup-garou-round.handler';
import { RoundHandler } from '../../handlers/round-handler.interface';
import { SorciereHealthRoundHandler } from '../../handlers/sorciere-health/sorciere-health-round.handler';
import { SorciereKillRoundHandler } from '../../handlers/sorciere-kill/sorciere-kill-round.handler';
import { VillageoisRoundHandler } from '../../handlers/villageois/villageois-round.handler';

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
        default:
          break;
      }
    });
  }

  getHandler(round: RoundEnum): RoundHandler | undefined {
    return this.roundHandlers.get(round);
  }
}
