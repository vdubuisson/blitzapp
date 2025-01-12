import { VictoryEnum } from '@/enums/victory.enum';
import { AmoureuxVictoryHandler } from '@/victory-handlers/amoureux/amoureux-victory.handler';
import { AngeVictoryHandler } from '@/victory-handlers/ange/ange-victory.handler';
import { JoueurFluteVictoryHandler } from '@/victory-handlers/joueur-flute/joueur-flute-victory.handler';
import { LoupBlancVictoryHandler } from '@/victory-handlers/loup-blanc/loup-blanc-victory.handler';
import { LoupGarouVictoryHandler } from '@/victory-handlers/loup-garou/loup-garou-victory.handler';
import { NoneVictoryHandler } from '@/victory-handlers/none/none-victory.handler';
import { SectaireVictoryHandler } from '@/victory-handlers/sectaire/sectaire-victory.handler';
import { VictoryHandler } from '@/victory-handlers/victory.handler';
import { VillageoisVictoryHandler } from '@/victory-handlers/villageois/villageois-victory.handler';

export const VICTORY_HANDLERS_CONFIG: Record<
  VictoryEnum,
  new () => VictoryHandler
> = {
  [VictoryEnum.NONE]: NoneVictoryHandler,
  [VictoryEnum.ANGE]: AngeVictoryHandler,
  [VictoryEnum.AMOUREUX]: AmoureuxVictoryHandler,
  [VictoryEnum.JOUEUR_FLUTE]: JoueurFluteVictoryHandler,
  [VictoryEnum.LOUP_BLANC]: LoupBlancVictoryHandler,
  [VictoryEnum.LOUP_GAROU]: LoupGarouVictoryHandler,
  [VictoryEnum.SECTAIRE]: SectaireVictoryHandler,
  [VictoryEnum.VILLAGEOIS]: VillageoisVictoryHandler,
};
