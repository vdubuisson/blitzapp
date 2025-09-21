import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Round } from '@/types/round';
import { Victory } from '@/types/victory';
import { AncienRoleHandler } from '@/game-handlers/roles/ancien/ancien.role-handler';
import { AngeRoleHandler } from '@/game-handlers/roles/ange/ange.role-handler';
import { BoucRoleHandler } from '@/game-handlers/roles/bouc/bouc.role-handler';
import { ChasseurRoleHandler } from '@/game-handlers/roles/chasseur/chasseur.role-handler';
import { ChevalierRoleHandler } from '@/game-handlers/roles/chevalier/chevalier.role-handler';
import { ChienLoupRoleHandler } from '@/game-handlers/roles/chien-loup/chien-loup.role-handler';
import { CorbeauRoleHandler } from '@/game-handlers/roles/corbeau/corbeau.role-handler';
import { CupidonRoleHandler } from '@/game-handlers/roles/cupidon/cupidon.role-handler';
import { EnfantSauvageRoleHandler } from '@/game-handlers/roles/enfant-sauvage/enfant-sauvage.role-handler';
import { FrereRoleHandler } from '@/game-handlers/roles/frere/frere.role-handler';
import { GrandMechantLoupRoleHandler } from '@/game-handlers/roles/grand-mechant-loup/grand-mechant-loup.role-handler';
import { IdiotRoleHandler } from '@/game-handlers/roles/idiot/idiot.role-handler';
import { JoueurFluteRoleHandler } from '@/game-handlers/roles/joueur-flute/joueur-flute.role-handler';
import { LoupBlancRoleHandler } from '@/game-handlers/roles/loup-blanc/loup-blanc.role-handler';
import { LoupGarouRoleHandler } from '@/game-handlers/roles/loup-garou/loup-garou.role-handler';
import { MontreurOursRoleHandler } from '@/game-handlers/roles/montreur-ours/montreur-ours.role-handler';
import { PereLoupsRoleHandler } from '@/game-handlers/roles/pere-loups/pere-loups.role-handler';
import { PetiteFilleRoleHandler } from '@/game-handlers/roles/petite-fille/petite-fille.role-handler';
import { RenardRoleHandler } from '@/game-handlers/roles/renard/renard.role-handler';
import { RoleHandler } from '@/game-handlers/roles/role-handler.interface';
import { SalvateurRoleHandler } from '@/game-handlers/roles/salvateur/salvateur.role-handler';
import { SectaireRoleHandler } from '@/game-handlers/roles/sectaire/sectaire.role-handler';
import { SoeurRoleHandler } from '@/game-handlers/roles/soeur/soeur.role-handler';
import { SorciereRoleHandler } from '@/game-handlers/roles/sorciere/sorciere.role-handler';
import { VillageoisRoleHandler } from '@/game-handlers/roles/villageois/villageois.role-handler';
import { VoleurRoleHandler } from '@/game-handlers/roles/voleur/voleur.role-handler';
import { VoyanteRoleHandler } from '@/game-handlers/roles/voyante/voyante.role-handler';

export type RoleMetadata = {
  handler: new () => RoleHandler;
  rounds: Round[];
  statuses: PlayerStatus[];
  victories: Victory[];
};

export const ROLE_METADATA_CONFIG: Record<
  PlayerRole,
  RoleMetadata | undefined
> = {
  [PlayerRole.NOT_SELECTED]: undefined,
  [PlayerRole.VILLAGEOIS]: {
    handler: VillageoisRoleHandler,
    rounds: [],
    statuses: [],
    victories: [],
  },
  [PlayerRole.LOUP_GAROU]: {
    handler: LoupGarouRoleHandler,
    rounds: [],
    statuses: [PlayerStatus.WOLF_TARGET, PlayerStatus.DEVOURED],
    victories: [Victory.LOUP_GAROU],
  },
  [PlayerRole.CHASSEUR]: {
    handler: ChasseurRoleHandler,
    rounds: [Round.CHASSEUR],
    statuses: [],
    victories: [],
  },
  [PlayerRole.CUPIDON]: {
    handler: CupidonRoleHandler,
    rounds: [Round.CUPIDON, Round.AMOUREUX],
    statuses: [PlayerStatus.LOVER],
    victories: [Victory.AMOUREUX],
  },
  [PlayerRole.PETITE_FILLE]: {
    handler: PetiteFilleRoleHandler,
    rounds: [],
    statuses: [],
    victories: [],
  },
  [PlayerRole.SORCIERE]: {
    handler: SorciereRoleHandler,
    rounds: [Round.SORCIERE_HEALTH, Round.SORCIERE_KILL],
    statuses: [PlayerStatus.HEALTH_POTION, PlayerStatus.DEATH_POTION],
    victories: [],
  },
  [PlayerRole.VOLEUR]: {
    handler: VoleurRoleHandler,
    rounds: [Round.VOLEUR],
    statuses: [],
    victories: [],
  },
  [PlayerRole.VOYANTE]: {
    handler: VoyanteRoleHandler,
    rounds: [Round.VOYANTE],
    statuses: [],
    victories: [],
  },
  [PlayerRole.JOUEUR_FLUTE]: {
    handler: JoueurFluteRoleHandler,
    rounds: [Round.JOUEUR_FLUTE, Round.CHARMED],
    statuses: [PlayerStatus.CHARMED],
    victories: [Victory.JOUEUR_FLUTE],
  },
  [PlayerRole.CORBEAU]: {
    handler: CorbeauRoleHandler,
    rounds: [Round.CORBEAU],
    statuses: [PlayerStatus.RAVEN],
    victories: [],
  },
  [PlayerRole.ENFANT_SAUVAGE]: {
    handler: EnfantSauvageRoleHandler,
    rounds: [Round.ENFANT_SAUVAGE],
    statuses: [PlayerStatus.CHILD_MODEL],
    victories: [],
  },
  [PlayerRole.SALVATEUR]: {
    handler: SalvateurRoleHandler,
    rounds: [Round.SALVATEUR],
    statuses: [PlayerStatus.PROTECTED],
    victories: [],
  },
  [PlayerRole.GRAND_MECHANT_LOUP]: {
    handler: GrandMechantLoupRoleHandler,
    rounds: [Round.GRAND_MECHANT_LOUP],
    statuses: [PlayerStatus.WOLF_TARGET, PlayerStatus.DEVOURED],
    victories: [Victory.LOUP_GAROU],
  },
  [PlayerRole.MONTREUR_OURS]: {
    handler: MontreurOursRoleHandler,
    rounds: [Round.MONTREUR_OURS],
    statuses: [],
    victories: [],
  },
  [PlayerRole.RENARD]: {
    handler: RenardRoleHandler,
    rounds: [Round.RENARD],
    statuses: [PlayerStatus.NO_POWER],
    victories: [],
  },
  [PlayerRole.CHIEN_LOUP]: {
    handler: ChienLoupRoleHandler,
    rounds: [Round.CHIEN_LOUP],
    statuses: [PlayerStatus.WOLF_TARGET, PlayerStatus.DEVOURED],
    victories: [],
  },
  [PlayerRole.SOEUR]: {
    handler: SoeurRoleHandler,
    rounds: [Round.SOEURS],
    statuses: [],
    victories: [],
  },
  [PlayerRole.FRERE]: {
    handler: FrereRoleHandler,
    rounds: [Round.FRERES],
    statuses: [],
    victories: [],
  },
  [PlayerRole.LOUP_BLANC]: {
    handler: LoupBlancRoleHandler,
    rounds: [Round.LOUP_BLANC],
    statuses: [PlayerStatus.WOLF_TARGET, PlayerStatus.DEVOURED],
    victories: [Victory.LOUP_BLANC, Victory.LOUP_GAROU],
  },
  [PlayerRole.ANGE]: {
    handler: AngeRoleHandler,
    rounds: [],
    statuses: [],
    victories: [Victory.ANGE],
  },
  [PlayerRole.ANCIEN]: {
    handler: AncienRoleHandler,
    rounds: [],
    statuses: [PlayerStatus.INJURED],
    victories: [],
  },
  [PlayerRole.IDIOT]: {
    handler: IdiotRoleHandler,
    rounds: [],
    statuses: [PlayerStatus.NO_VOTE],
    victories: [],
  },
  [PlayerRole.CHEVALIER]: {
    handler: ChevalierRoleHandler,
    rounds: [],
    statuses: [PlayerStatus.RUSTY_SWORD],
    victories: [],
  },
  [PlayerRole.BOUC]: {
    handler: BoucRoleHandler,
    rounds: [Round.BOUC],
    statuses: [PlayerStatus.NO_VOTE],
    victories: [],
  },
  [PlayerRole.SECTAIRE]: {
    handler: SectaireRoleHandler,
    rounds: [Round.SECTAIRE],
    statuses: [PlayerStatus.BLUE_TEAM, PlayerStatus.RED_TEAM],
    victories: [Victory.SECTAIRE],
  },
  [PlayerRole.PERE_LOUPS]: {
    handler: PereLoupsRoleHandler,
    rounds: [Round.PERE_LOUPS],
    statuses: [
      PlayerStatus.WOLF_TARGET,
      PlayerStatus.NO_POWER,
      PlayerStatus.INFECTED,
      PlayerStatus.DEVOURED,
    ],
    victories: [Victory.LOUP_GAROU],
  },
};
