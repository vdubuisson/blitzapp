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
  GrandMechantLoupRoundHandler,
  MontreurOursRoundHandler,
  RenardRoundHandler,
  ChienLoupRoundHandler,
  SoeursRoundHandler,
} from '../../round-handlers';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { AnnouncementService } from '../announcement/announcement.service';
import { StorageService } from '../storage/storage.service';

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

    this.roundHandlers.set(RoundEnum.VILLAGEOIS, new VillageoisRoundHandler());
    this.roundHandlers.set(RoundEnum.CAPITAINE, new CapitaineRoundHandler());

    if (
      rolesSet.has(PlayerRoleEnum.LOUP_GAROU) ||
      rolesSet.has(PlayerRoleEnum.GRAND_MECHANT_LOUP)
    ) {
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

    if (rolesSet.has(PlayerRoleEnum.GRAND_MECHANT_LOUP)) {
      this.roundHandlers.set(
        RoundEnum.GRAND_MECHANT_LOUP,
        new GrandMechantLoupRoundHandler()
      );
    }

    if (rolesSet.has(PlayerRoleEnum.MONTREUR_OURS)) {
      this.roundHandlers.set(
        RoundEnum.MONTREUR_OURS,
        new MontreurOursRoundHandler(this.announcementService)
      );
    }

    if (rolesSet.has(PlayerRoleEnum.RENARD)) {
      this.roundHandlers.set(
        RoundEnum.RENARD,
        new RenardRoundHandler(this.announcementService)
      );
    }

    if (rolesSet.has(PlayerRoleEnum.CHIEN_LOUP)) {
      this.roundHandlers.set(RoundEnum.CHIEN_LOUP, new ChienLoupRoundHandler());
    }

    if (rolesSet.has(PlayerRoleEnum.SOEUR)) {
      this.roundHandlers.set(RoundEnum.SOEURS, new SoeursRoundHandler());
    }
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
    if (rolesSet.has(PlayerRoleEnum.GRAND_MECHANT_LOUP)) {
      this.roundHandlers.delete(RoundEnum.GRAND_MECHANT_LOUP);
    }
    if (rolesSet.has(PlayerRoleEnum.MONTREUR_OURS)) {
      this.roundHandlers.delete(RoundEnum.MONTREUR_OURS);
    }
    if (rolesSet.has(PlayerRoleEnum.RENARD)) {
      this.roundHandlers.delete(RoundEnum.RENARD);
    }
    if (rolesSet.has(PlayerRoleEnum.CHIEN_LOUP)) {
      this.roundHandlers.delete(RoundEnum.CHIEN_LOUP);
    }
    if (rolesSet.has(PlayerRoleEnum.SOEUR)) {
      this.roundHandlers.delete(RoundEnum.SOEURS);
    }
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
}
