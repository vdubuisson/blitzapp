export const GameBoxEnum = {
  CORE: 'CORE',
  LUNE: 'LUNE',
  VILLAGE: 'VILLAGE',
  PERSONNAGES: 'PERSONNAGES',
  PACTE: 'PACTE',
} as const satisfies Record<string, string>;

export type GameBox = keyof typeof GameBoxEnum;
