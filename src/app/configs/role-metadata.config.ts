import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { AncienRoleHandler } from '@/role-handlers/ancien/ancien.role-handler';
import { AngeRoleHandler } from '@/role-handlers/ange/ange.role-handler';
import { BoucRoleHandler } from '@/role-handlers/bouc/bouc.role-handler';
import { ChasseurRoleHandler } from '@/role-handlers/chasseur/chasseur.role-handler';
import { ChevalierRoleHandler } from '@/role-handlers/chevalier/chevalier.role-handler';
import { ChienLoupRoleHandler } from '@/role-handlers/chien-loup/chien-loup.role-handler';
import { CorbeauRoleHandler } from '@/role-handlers/corbeau/corbeau.role-handler';
import { CupidonRoleHandler } from '@/role-handlers/cupidon/cupidon.role-handler';
import { EnfantSauvageRoleHandler } from '@/role-handlers/enfant-sauvage/enfant-sauvage.role-handler';
import { FrereRoleHandler } from '@/role-handlers/frere/frere.role-handler';
import { GrandMechantLoupRoleHandler } from '@/role-handlers/grand-mechant-loup/grand-mechant-loup.role-handler';
import { IdiotRoleHandler } from '@/role-handlers/idiot/idiot.role-handler';
import { JoueurFluteRoleHandler } from '@/role-handlers/joueur-flute/joueur-flute.role-handler';
import { LoupBlancRoleHandler } from '@/role-handlers/loup-blanc/loup-blanc.role-handler';
import { LoupGarouRoleHandler } from '@/role-handlers/loup-garou/loup-garou.role-handler';
import { MontreurOursRoleHandler } from '@/role-handlers/montreur-ours/montreur-ours.role-handler';
import { PereLoupsRoleHandler } from '@/role-handlers/pere-loups/pere-loups.role-handler';
import { PetiteFilleRoleHandler } from '@/role-handlers/petite-fille/petite-fille.role-handler';
import { RenardRoleHandler } from '@/role-handlers/renard/renard.role-handler';
import { RoleHandler } from '@/role-handlers/role-handler.interface';
import { SalvateurRoleHandler } from '@/role-handlers/salvateur/salvateur.role-handler';
import { SectaireRoleHandler } from '@/role-handlers/sectaire/sectaire.role-handler';
import { SoeurRoleHandler } from '@/role-handlers/soeur/soeur.role-handler';
import { SorciereRoleHandler } from '@/role-handlers/sorciere/sorciere.role-handler';
import { VillageoisRoleHandler } from '@/role-handlers/villageois/villageois.role-handler';
import { VoleurRoleHandler } from '@/role-handlers/voleur/voleur.role-handler';
import { VoyanteRoleHandler } from '@/role-handlers/voyante/voyante.role-handler';

export interface RoleMetadata {
  handler: new () => RoleHandler;
  rounds: RoundEnum[];
  statuses: PlayerStatusEnum[];
  victories: VictoryEnum[];
}

//TODO Use DefaultRoleHandler for simple handlers like StatusHandlers

export const ROLE_METADATA_CONFIG: Record<
  PlayerRoleEnum,
  RoleMetadata | undefined
> = {
  [PlayerRoleEnum.NOT_SELECTED]: undefined,
  [PlayerRoleEnum.VILLAGEOIS]: {
    handler: VillageoisRoleHandler,
    rounds: [],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.LOUP_GAROU]: {
    handler: LoupGarouRoleHandler,
    rounds: [],
    statuses: [PlayerStatusEnum.WOLF_TARGET, PlayerStatusEnum.DEVOURED],
    victories: [VictoryEnum.LOUP_GAROU],
  },
  [PlayerRoleEnum.CHASSEUR]: {
    handler: ChasseurRoleHandler,
    rounds: [RoundEnum.CHASSEUR],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.CUPIDON]: {
    handler: CupidonRoleHandler,
    rounds: [RoundEnum.CUPIDON, RoundEnum.AMOUREUX],
    statuses: [PlayerStatusEnum.LOVER],
    victories: [VictoryEnum.AMOUREUX],
  },
  [PlayerRoleEnum.PETITE_FILLE]: {
    handler: PetiteFilleRoleHandler,
    rounds: [],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.SORCIERE]: {
    handler: SorciereRoleHandler,
    rounds: [RoundEnum.SORCIERE_HEALTH, RoundEnum.SORCIERE_KILL],
    statuses: [PlayerStatusEnum.HEALTH_POTION, PlayerStatusEnum.DEATH_POTION],
    victories: [],
  },
  [PlayerRoleEnum.VOLEUR]: {
    handler: VoleurRoleHandler,
    rounds: [RoundEnum.VOLEUR],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.VOYANTE]: {
    handler: VoyanteRoleHandler,
    rounds: [RoundEnum.VOYANTE],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.JOUEUR_FLUTE]: {
    handler: JoueurFluteRoleHandler,
    rounds: [RoundEnum.JOUEUR_FLUTE, RoundEnum.CHARMED],
    statuses: [PlayerStatusEnum.CHARMED],
    victories: [VictoryEnum.JOUEUR_FLUTE],
  },
  [PlayerRoleEnum.CORBEAU]: {
    handler: CorbeauRoleHandler,
    rounds: [RoundEnum.CORBEAU],
    statuses: [PlayerStatusEnum.RAVEN],
    victories: [],
  },
  [PlayerRoleEnum.ENFANT_SAUVAGE]: {
    handler: EnfantSauvageRoleHandler,
    rounds: [RoundEnum.ENFANT_SAUVAGE],
    statuses: [PlayerStatusEnum.CHILD_MODEL],
    victories: [],
  },
  [PlayerRoleEnum.SALVATEUR]: {
    handler: SalvateurRoleHandler,
    rounds: [RoundEnum.SALVATEUR],
    statuses: [PlayerStatusEnum.PROTECTED],
    victories: [],
  },
  [PlayerRoleEnum.GRAND_MECHANT_LOUP]: {
    handler: GrandMechantLoupRoleHandler,
    rounds: [RoundEnum.GRAND_MECHANT_LOUP],
    statuses: [PlayerStatusEnum.WOLF_TARGET, PlayerStatusEnum.DEVOURED],
    victories: [VictoryEnum.LOUP_GAROU],
  },
  [PlayerRoleEnum.MONTREUR_OURS]: {
    handler: MontreurOursRoleHandler,
    rounds: [RoundEnum.MONTREUR_OURS],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.RENARD]: {
    handler: RenardRoleHandler,
    rounds: [RoundEnum.RENARD],
    statuses: [PlayerStatusEnum.NO_POWER],
    victories: [],
  },
  [PlayerRoleEnum.CHIEN_LOUP]: {
    handler: ChienLoupRoleHandler,
    rounds: [RoundEnum.CHIEN_LOUP],
    statuses: [PlayerStatusEnum.WOLF_TARGET, PlayerStatusEnum.DEVOURED],
    victories: [],
  },
  [PlayerRoleEnum.SOEUR]: {
    handler: SoeurRoleHandler,
    rounds: [RoundEnum.SOEURS],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.FRERE]: {
    handler: FrereRoleHandler,
    rounds: [RoundEnum.FRERES],
    statuses: [],
    victories: [],
  },
  [PlayerRoleEnum.LOUP_BLANC]: {
    handler: LoupBlancRoleHandler,
    rounds: [RoundEnum.LOUP_BLANC],
    statuses: [PlayerStatusEnum.WOLF_TARGET, PlayerStatusEnum.DEVOURED],
    victories: [VictoryEnum.LOUP_BLANC, VictoryEnum.LOUP_GAROU],
  },
  [PlayerRoleEnum.ANGE]: {
    handler: AngeRoleHandler,
    rounds: [],
    statuses: [],
    victories: [VictoryEnum.ANGE],
  },
  [PlayerRoleEnum.ANCIEN]: {
    handler: AncienRoleHandler,
    rounds: [],
    statuses: [PlayerStatusEnum.INJURED],
    victories: [],
  },
  [PlayerRoleEnum.IDIOT]: {
    handler: IdiotRoleHandler,
    rounds: [],
    statuses: [PlayerStatusEnum.NO_VOTE],
    victories: [],
  },
  [PlayerRoleEnum.CHEVALIER]: {
    handler: ChevalierRoleHandler,
    rounds: [],
    statuses: [PlayerStatusEnum.RUSTY_SWORD],
    victories: [],
  },
  [PlayerRoleEnum.BOUC]: {
    handler: BoucRoleHandler,
    rounds: [RoundEnum.BOUC],
    statuses: [PlayerStatusEnum.NO_VOTE],
    victories: [],
  },
  [PlayerRoleEnum.SECTAIRE]: {
    handler: SectaireRoleHandler,
    rounds: [RoundEnum.SECTAIRE],
    statuses: [PlayerStatusEnum.BLUE_TEAM, PlayerStatusEnum.RED_TEAM],
    victories: [VictoryEnum.SECTAIRE],
  },
  [PlayerRoleEnum.PERE_LOUPS]: {
    handler: PereLoupsRoleHandler,
    rounds: [RoundEnum.PERE_LOUPS],
    statuses: [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.NO_POWER,
      PlayerStatusEnum.INFECTED,
      PlayerStatusEnum.DEVOURED,
    ],
    victories: [VictoryEnum.LOUP_GAROU],
  },
};
