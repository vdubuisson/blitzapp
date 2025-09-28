export const RoundTypeEnum = {
  DEFAULT: 'DEFAULT',
  PLAYERS: 'PLAYERS',
  AUTO: 'AUTO',
  ROLES: 'ROLES',
} as const satisfies Record<string, string>;

export type RoundType = keyof typeof RoundTypeEnum;
