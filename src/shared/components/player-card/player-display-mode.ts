export const PlayerDisplayModeEnum = {
  DEFAULT: 'DEFAULT',
  SELECT_SINGLE: 'SELECT_SINGLE',
  SELECT_MULTI: 'SELECT_MULTI',
  EDIT_ROLE: 'EDIT_ROLE',
} as const satisfies Record<string, string>;

export type PlayerDisplayMode = keyof typeof PlayerDisplayModeEnum;
