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
  AmoureuxRoundHandler,
  JoueurFluteRoundHandler,
  CharmedRoundHandler,
  CorbeauRoundHandler,
  EnfantSauvageRoundHandler,
  SalvateurRoundHandler,
} from '../../round-handlers';
import { RoundHandler } from '../../round-handlers/round-handler.interface';

@Injectable({
  providedIn: 'root',
})
export class RoundHandlersService {
  private readonly roundHandlers: Map<RoundEnum, RoundHandler> = new Map();

  initHandlers(roles: PlayerRoleEnum[]): void {
    this.roundHandlers.clear();

    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);

    this.roundHandlers.set(RoundEnum.VILLAGEOIS, new VillageoisRoundHandler());
    this.roundHandlers.set(RoundEnum.CAPITAINE, new CapitaineRoundHandler());

    if (rolesSet.has(PlayerRoleEnum.LOUP_GAROU)) {
      this.roundHandlers.set(RoundEnum.LOUP_GAROU, new LoupGarouRoundHandler());
    }

    if (rolesSet.has(PlayerRoleEnum.SORCIERE)) {
      this.roundHandlers.set(
        RoundEnum.SORCIERE_HEALTH,
        new SorciereHealthRoundHandler()
      );
      this.roundHandlers.set(
        RoundEnum.SORCIERE_KILL,
        new SorciereKillRoundHandler()
      );
    }

    if (rolesSet.has(PlayerRoleEnum.CUPIDON)) {
      this.roundHandlers.set(RoundEnum.CUPIDON, new CupidonRoundHandler());
      this.roundHandlers.set(RoundEnum.AMOUREUX, new AmoureuxRoundHandler());
    }

    if (rolesSet.has(PlayerRoleEnum.CHASSEUR)) {
      this.roundHandlers.set(RoundEnum.CHASSEUR, new ChasseurRoundHandler());
    }

    if (rolesSet.has(PlayerRoleEnum.VOYANTE)) {
      this.roundHandlers.set(RoundEnum.VOYANTE, new VoyanteRoundHandler());
    }

    if (rolesSet.has(PlayerRoleEnum.JOUEUR_FLUTE)) {
      this.roundHandlers.set(
        RoundEnum.JOUEUR_FLUTE,
        new JoueurFluteRoundHandler()
      );
      this.roundHandlers.set(RoundEnum.CHARMED, new CharmedRoundHandler());
    }

    if (rolesSet.has(PlayerRoleEnum.CORBEAU)) {
      this.roundHandlers.set(RoundEnum.CORBEAU, new CorbeauRoundHandler());
    }

    if (rolesSet.has(PlayerRoleEnum.ENFANT_SAUVAGE)) {
      this.roundHandlers.set(
        RoundEnum.ENFANT_SAUVAGE,
        new EnfantSauvageRoundHandler()
      );
    }

    if (rolesSet.has(PlayerRoleEnum.SALVATEUR)) {
      this.roundHandlers.set(RoundEnum.SALVATEUR, new SalvateurRoundHandler());
    }
  }

  getHandler(round: RoundEnum): RoundHandler | undefined {
    return this.roundHandlers.get(round);
  }

  removeHandlers(roles: PlayerRoleEnum[]): void {
    const rolesSet: Set<PlayerRoleEnum> = new Set(roles);
    if (rolesSet.has(PlayerRoleEnum.LOUP_GAROU)) {
      this.roundHandlers.delete(RoundEnum.LOUP_GAROU);
    }
    if (rolesSet.has(PlayerRoleEnum.SORCIERE)) {
      this.roundHandlers.delete(RoundEnum.SORCIERE_HEALTH);
      this.roundHandlers.delete(RoundEnum.SORCIERE_KILL);
    }
    if (rolesSet.has(PlayerRoleEnum.CUPIDON)) {
      this.roundHandlers.delete(RoundEnum.CUPIDON);
    }
    if (rolesSet.has(PlayerRoleEnum.CHASSEUR)) {
      this.roundHandlers.delete(RoundEnum.CHASSEUR);
    }
    if (rolesSet.has(PlayerRoleEnum.VOYANTE)) {
      this.roundHandlers.delete(RoundEnum.VOYANTE);
    }
    if (rolesSet.has(PlayerRoleEnum.JOUEUR_FLUTE)) {
      this.roundHandlers.delete(RoundEnum.JOUEUR_FLUTE);
      this.roundHandlers.delete(RoundEnum.CHARMED);
    }
    if (rolesSet.has(PlayerRoleEnum.CORBEAU)) {
      this.roundHandlers.delete(RoundEnum.CORBEAU);
    }
    if (rolesSet.has(PlayerRoleEnum.ENFANT_SAUVAGE)) {
      this.roundHandlers.delete(RoundEnum.ENFANT_SAUVAGE);
    }
    if (rolesSet.has(PlayerRoleEnum.SALVATEUR)) {
      this.roundHandlers.delete(RoundEnum.SALVATEUR);
    }
  }
}
