import { Round, RoundEnum } from '@/types/round';
import { AmoureuxRoundHandler } from '@/game-handlers/rounds/amoureux/amoureux-round.handler';
import { BoucRoundHandler } from '@/game-handlers/rounds/bouc/bouc-round.handler';
import { CapitaineRoundHandler } from '@/game-handlers/rounds/capitaine/capitaine-round.handler';
import { CharmedRoundHandler } from '@/game-handlers/rounds/charmed/charmed-round.handler';
import { ChasseurRoundHandler } from '@/game-handlers/rounds/chasseur/chasseur-round.handler';
import { ChienLoupRoundHandler } from '@/game-handlers/rounds/chien-loup/chien-loup-round.handler';
import { CorbeauRoundHandler } from '@/game-handlers/rounds/corbeau/corbeau-round.handler';
import { CupidonRoundHandler } from '@/game-handlers/rounds/cupidon/cupidon-round.handler';
import { EnfantSauvageRoundHandler } from '@/game-handlers/rounds/enfant-sauvage/enfant-sauvage-round.handler';
import { FreresRoundHandler } from '@/game-handlers/rounds/freres/freres-round.handler';
import { GrandMechantLoupRoundHandler } from '@/game-handlers/rounds/grand-mechant-loup/grand-mechant-loup-round.handler';
import { JoueurFluteRoundHandler } from '@/game-handlers/rounds/joueur-flute/joueur-flute-round.handler';
import { LoupBlancRoundHandler } from '@/game-handlers/rounds/loup-blanc/loup-blanc-round.handler';
import { LoupGarouRoundHandler } from '@/game-handlers/rounds/loup-garou/loup-garou-round.handler';
import { MontreurOursRoundHandler } from '@/game-handlers/rounds/montreur-ours/montreur-ours-round.handler';
import { PereLoupsRoundHandler } from '@/game-handlers/rounds/pere-loups/pere-loups-round.handler';
import { RenardRoundHandler } from '@/game-handlers/rounds/renard/renard-round.handler';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { SalvateurRoundHandler } from '@/game-handlers/rounds/salvateur/salvateur-round.handler';
import { SectaireRoundHandler } from '@/game-handlers/rounds/sectaire/sectaire-round.handler';
import { SoeursRoundHandler } from '@/game-handlers/rounds/soeurs/soeurs-round.handler';
import { SorciereHealthRoundHandler } from '@/game-handlers/rounds/sorciere-health/sorciere-health-round.handler';
import { SorciereKillRoundHandler } from '@/game-handlers/rounds/sorciere-kill/sorciere-kill-round.handler';
import { VillageoisRoundHandler } from '@/game-handlers/rounds/villageois/villageois-round.handler';
import { VoleurRoundHandler } from '@/game-handlers/rounds/voleur/voleur-round.handler';
import { VoyanteRoundHandler } from '@/game-handlers/rounds/voyante/voyante-round.handler';

export const ROUND_HANDLERS: Record<Round, new () => RoundHandler> = {
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
