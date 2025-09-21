import { GameBoxes } from '@/config/game-boxes';

export const GAME_BOX_NAMES: Record<GameBoxes, string> = {
  [GameBoxes.CORE]: 'Boite de base',
  [GameBoxes.LUNE]: 'Extension - Nouvelle lune',
  [GameBoxes.VILLAGE]: 'Extension - Village',
  [GameBoxes.PERSONNAGES]: 'Extension - Personnages',
  [GameBoxes.PACTE]: 'Le Pacte',
};
