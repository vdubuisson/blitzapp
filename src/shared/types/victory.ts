export const VictoryEnum = {
  NONE: 'NONE',
  ANGE: 'ANGE',
  AMOUREUX: 'AMOUREUX',
  LOUP_GAROU: 'LOUP_GAROU',
  VILLAGEOIS: 'VILLAGEOIS',
  JOUEUR_FLUTE: 'JOUEUR_FLUTE',
  LOUP_BLANC: 'LOUP_BLANC',
  SECTAIRE: 'SECTAIRE',
} as const satisfies Record<string, string>;

export type Victory = keyof typeof VictoryEnum;
