import { RoundEnum } from '../enums/round.enum';
import {
  AmoureuxRoundHandler,
  BoucRoundHandler,
  CapitaineRoundHandler,
  CharmedRoundHandler,
  ChasseurRoundHandler,
  ChienLoupRoundHandler,
  CorbeauRoundHandler,
  CupidonRoundHandler,
  EnfantSauvageRoundHandler,
  FreresRoundHandler,
  GrandMechantLoupRoundHandler,
  JoueurFluteRoundHandler,
  LoupBlancRoundHandler,
  LoupGarouRoundHandler,
  MontreurOursRoundHandler,
  PereLoupsRoundHandler,
  RenardRoundHandler,
  SalvateurRoundHandler,
  SectaireRoundHandler,
  SoeursRoundHandler,
  SorciereHealthRoundHandler,
  SorciereKillRoundHandler,
  VillageoisRoundHandler,
  VoleurRoundHandler,
  VoyanteRoundHandler,
} from '../round-handlers';
import { RoundHandler } from '../round-handlers/round-handler.interface';
import { RoundHandlerParameters } from '../round-handlers/round-handler-parameters.interface';

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
