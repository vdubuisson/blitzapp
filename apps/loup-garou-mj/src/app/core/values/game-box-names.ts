import { GameBoxEnum } from '../enums/game-box.enum';

export const GAME_BOX_NAMES: Record<GameBoxEnum, string> = {
  [GameBoxEnum.CORE]: 'Boite de base',
  [GameBoxEnum.LUNE]: 'Extension - Nouvelle lune',
  [GameBoxEnum.VILLAGE]: 'Extension - Village',
  [GameBoxEnum.PERSONNAGES]: 'Extension - Personnages',
  [GameBoxEnum.PACTE]: 'Le Pacte',
};
