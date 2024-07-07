import { RoundEnum } from '@/enums/round.enum';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { RoundHandlerParameters } from '@/round-handlers/round-handler-parameters.interface';
import { AmoureuxRoundHandler } from '@/round-handlers/amoureux/amoureux-round.handler';
import { BoucRoundHandler } from '@/round-handlers/bouc/bouc-round.handler';
import { CapitaineRoundHandler } from '@/round-handlers/capitaine/capitaine-round.handler';
import { CharmedRoundHandler } from '@/round-handlers/charmed/charmed-round.handler';
import { ChasseurRoundHandler } from '@/round-handlers/chasseur/chasseur-round.handler';
import { ChienLoupRoundHandler } from '@/round-handlers/chien-loup/chien-loup-round.handler';
import { CorbeauRoundHandler } from '@/round-handlers/corbeau/corbeau-round.handler';
import { CupidonRoundHandler } from '@/round-handlers/cupidon/cupidon-round.handler';
import { EnfantSauvageRoundHandler } from '@/round-handlers/enfant-sauvage/enfant-sauvage-round.handler';
import { FreresRoundHandler } from '@/round-handlers/freres/freres-round.handler';
import { GrandMechantLoupRoundHandler } from '@/round-handlers/grand-mechant-loup/grand-mechant-loup-round.handler';
import { JoueurFluteRoundHandler } from '@/round-handlers/joueur-flute/joueur-flute-round.handler';
import { LoupBlancRoundHandler } from '@/round-handlers/loup-blanc/loup-blanc-round.handler';
import { LoupGarouRoundHandler } from '@/round-handlers/loup-garou/loup-garou-round.handler';
import { MontreurOursRoundHandler } from '@/round-handlers/montreur-ours/montreur-ours-round.handler';
import { PereLoupsRoundHandler } from '@/round-handlers/pere-loups/pere-loups-round.handler';
import { RenardRoundHandler } from '@/round-handlers/renard/renard-round.handler';
import { SalvateurRoundHandler } from '@/round-handlers/salvateur/salvateur-round.handler';
import { SectaireRoundHandler } from '@/round-handlers/sectaire/sectaire-round.handler';
import { SoeursRoundHandler } from '@/round-handlers/soeurs/soeurs-round.handler';
import { SorciereHealthRoundHandler } from '@/round-handlers/sorciere-health/sorciere-health-round.handler';
import { SorciereKillRoundHandler } from '@/round-handlers/sorciere-kill/sorciere-kill-round.handler';
import { VillageoisRoundHandler } from '@/round-handlers/villageois/villageois-round.handler';
import { VoleurRoundHandler } from '@/round-handlers/voleur/voleur-round.handler';
import { VoyanteRoundHandler } from '@/round-handlers/voyante/voyante-round.handler';

export const ROUND_HANDLERS_CONFIG: Record<
  RoundEnum,
  new (p: RoundHandlerParameters) => RoundHandler
> = {
  [RoundEnum.AMOUREUX]: AmoureuxRoundHandler,
  [RoundEnum.BOUC]: BoucRoundHandler,
  [RoundEnum.CAPITAINE]: CapitaineRoundHandler,
  [RoundEnum.CHARMED]: CharmedRoundHandler,
  [RoundEnum.CHASSEUR]: ChasseurRoundHandler,
  [RoundEnum.CHIEN_LOUP]: ChienLoupRoundHandler,
  [RoundEnum.CORBEAU]: CorbeauRoundHandler,
  [RoundEnum.CUPIDON]: CupidonRoundHandler,
  [RoundEnum.ENFANT_SAUVAGE]: EnfantSauvageRoundHandler,
  [RoundEnum.FRERES]: FreresRoundHandler,
  [RoundEnum.GRAND_MECHANT_LOUP]: GrandMechantLoupRoundHandler,
  [RoundEnum.JOUEUR_FLUTE]: JoueurFluteRoundHandler,
  [RoundEnum.LOUP_BLANC]: LoupBlancRoundHandler,
  [RoundEnum.LOUP_GAROU]: LoupGarouRoundHandler,
  [RoundEnum.MONTREUR_OURS]: MontreurOursRoundHandler,
  [RoundEnum.PERE_LOUPS]: PereLoupsRoundHandler,
  [RoundEnum.RENARD]: RenardRoundHandler,
  [RoundEnum.SALVATEUR]: SalvateurRoundHandler,
  [RoundEnum.SECTAIRE]: SectaireRoundHandler,
  [RoundEnum.SOEURS]: SoeursRoundHandler,
  [RoundEnum.SORCIERE_HEALTH]: SorciereHealthRoundHandler,
  [RoundEnum.SORCIERE_KILL]: SorciereKillRoundHandler,
  [RoundEnum.VILLAGEOIS]: VillageoisRoundHandler,
  [RoundEnum.VOLEUR]: VoleurRoundHandler,
  [RoundEnum.VOYANTE]: VoyanteRoundHandler,
};
