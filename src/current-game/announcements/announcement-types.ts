export const AnnouncementTypesEnum = {
  DEATHS: 'DEATHS',
  BEAR_GROWL: 'BEAR_GROWL',
  FOX_SUCCESS: 'FOX_SUCCESS',
  FOX_FAIL: 'FOX_FAIL',
  ANCIEN_KILLED_BY_INNOCENTS: 'ANCIEN_KILLED_BY_INNOCENTS',
  IDIOT_PARDONED: 'IDIOT_PARDONED',
  WOLF_KILLED_BY_CHEVALIER: 'WOLF_KILLED_BY_CHEVALIER',
} as const satisfies Record<string, string>;

export type AnnouncementTypes = keyof typeof AnnouncementTypesEnum;
