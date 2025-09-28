import { GameBox, GameBoxEnum } from '@/config/game-boxes';

export const GAME_BOX_NAMES: Record<GameBox, string> = {
  [GameBoxEnum.CORE]: 'Boite de base',
  [GameBoxEnum.LUNE]: 'Extension - Nouvelle lune',
  [GameBoxEnum.VILLAGE]: 'Extension - Village',
  [GameBoxEnum.PERSONNAGES]: 'Extension - Personnages',
  [GameBoxEnum.PACTE]: 'Le Pacte',
};
