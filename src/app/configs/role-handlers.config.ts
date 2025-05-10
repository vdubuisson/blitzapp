import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
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

export const ROLE_HANDLERS_CONFIG: Record<
  PlayerRoleEnum,
  ((new () => RoleHandler) & { ROUNDS: RoundEnum[] }) | undefined
> = {
  [PlayerRoleEnum.NOT_SELECTED]: undefined,
  [PlayerRoleEnum.VILLAGEOIS]: VillageoisRoleHandler,
  [PlayerRoleEnum.LOUP_GAROU]: LoupGarouRoleHandler,
  [PlayerRoleEnum.CHASSEUR]: ChasseurRoleHandler,
  [PlayerRoleEnum.CUPIDON]: CupidonRoleHandler,
  [PlayerRoleEnum.PETITE_FILLE]: PetiteFilleRoleHandler,
  [PlayerRoleEnum.SORCIERE]: SorciereRoleHandler,
  [PlayerRoleEnum.VOLEUR]: VoleurRoleHandler,
  [PlayerRoleEnum.VOYANTE]: VoyanteRoleHandler,
  [PlayerRoleEnum.JOUEUR_FLUTE]: JoueurFluteRoleHandler,
  [PlayerRoleEnum.CORBEAU]: CorbeauRoleHandler,
  [PlayerRoleEnum.ENFANT_SAUVAGE]: EnfantSauvageRoleHandler,
  [PlayerRoleEnum.SALVATEUR]: SalvateurRoleHandler,
  [PlayerRoleEnum.GRAND_MECHANT_LOUP]: GrandMechantLoupRoleHandler,
  [PlayerRoleEnum.MONTREUR_OURS]: MontreurOursRoleHandler,
  [PlayerRoleEnum.RENARD]: RenardRoleHandler,
  [PlayerRoleEnum.CHIEN_LOUP]: ChienLoupRoleHandler,
  [PlayerRoleEnum.SOEUR]: SoeurRoleHandler,
  [PlayerRoleEnum.FRERE]: FrereRoleHandler,
  [PlayerRoleEnum.LOUP_BLANC]: LoupBlancRoleHandler,
  [PlayerRoleEnum.ANGE]: AngeRoleHandler,
  [PlayerRoleEnum.ANCIEN]: AncienRoleHandler,
  [PlayerRoleEnum.IDIOT]: IdiotRoleHandler,
  [PlayerRoleEnum.CHEVALIER]: ChevalierRoleHandler,
  [PlayerRoleEnum.BOUC]: BoucRoleHandler,
  [PlayerRoleEnum.SECTAIRE]: SectaireRoleHandler,
  [PlayerRoleEnum.PERE_LOUPS]: PereLoupsRoleHandler,
};
