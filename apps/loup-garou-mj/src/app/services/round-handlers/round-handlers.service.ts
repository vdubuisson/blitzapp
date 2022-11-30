import { Injectable } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import { LoupGarouRoundHandler } from '../../handlers/loup-garou/loup-garou-round.handler';
import { RoundHandler } from '../../handlers/round-handler.interface';
import { SorciereHealthRoundHandler } from '../../handlers/sorciere-health/sorciere-health-round.handler';

@Injectable({
  providedIn: 'root',
})
export class RoundHandlersService {
  roundHandlers: Map<RoundEnum, RoundHandler> = new Map();

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.roundHandlers.clear();
    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);
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
