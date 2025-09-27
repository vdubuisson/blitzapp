import { Victory } from '@/types/victory';
import { AmoureuxVictoryHandler } from '@/game-handlers/victories/amoureux/amoureux-victory.handler';
import { AngeVictoryHandler } from '@/game-handlers/victories/ange/ange-victory.handler';
import { JoueurFluteVictoryHandler } from '@/game-handlers/victories/joueur-flute/joueur-flute-victory.handler';
import { LoupBlancVictoryHandler } from '@/game-handlers/victories/loup-blanc/loup-blanc-victory.handler';
import { LoupGarouVictoryHandler } from '@/game-handlers/victories/loup-garou/loup-garou-victory.handler';
import { NoneVictoryHandler } from '@/game-handlers/victories/none/none-victory.handler';
import { SectaireVictoryHandler } from '@/game-handlers/victories/sectaire/sectaire-victory.handler';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';
import { VillageoisVictoryHandler } from '@/game-handlers/victories/villageois/villageois-victory.handler';

export const VICTORY_HANDLERS: Record<Victory, new () => VictoryHandler> = {
  [Victory.NONE]: NoneVictoryHandler,
  [Victory.ANGE]: AngeVictoryHandler,
  [Victory.AMOUREUX]: AmoureuxVictoryHandler,
  [Victory.JOUEUR_FLUTE]: JoueurFluteVictoryHandler,
  [Victory.LOUP_BLANC]: LoupBlancVictoryHandler,
  [Victory.LOUP_GAROU]: LoupGarouVictoryHandler,
  [Victory.SECTAIRE]: SectaireVictoryHandler,
  [Victory.VILLAGEOIS]: VillageoisVictoryHandler,
};
