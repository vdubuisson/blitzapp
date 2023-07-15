import { RoundEnum } from '../enums/round.enum';
import {
  AmoureuxRoundHandler,
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
  LoupGarouRoundHandler,
  MontreurOursRoundHandler,
  RenardRoundHandler,
  SalvateurRoundHandler,
  SoeursRoundHandler,
  SorciereHealthRoundHandler,
  SorciereKillRoundHandler,
  VillageoisRoundHandler,
  VoyanteRoundHandler,
} from '../round-handlers';
import { LoupBlancRoundHandler } from '../round-handlers/loup-blanc/loup-blanc-round.handler';
import { RoundHandler } from '../round-handlers/round-handler.interface';
import { AnnouncementService } from '../services/announcement/announcement.service';

export const ROUND_HANDLERS_CONFIG: Record<
  RoundEnum,
  new (s: AnnouncementService) => RoundHandler
> = {
  [RoundEnum.AMOUREUX]: AmoureuxRoundHandler,
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
  [RoundEnum.RENARD]: RenardRoundHandler,
  [RoundEnum.SALVATEUR]: SalvateurRoundHandler,
  [RoundEnum.SOEURS]: SoeursRoundHandler,
  [RoundEnum.SORCIERE_HEALTH]: SorciereHealthRoundHandler,
  [RoundEnum.SORCIERE_KILL]: SorciereKillRoundHandler,
  [RoundEnum.VILLAGEOIS]: VillageoisRoundHandler,
  [RoundEnum.VOYANTE]: VoyanteRoundHandler,
};
