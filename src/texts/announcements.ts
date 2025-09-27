import { AnnouncementTypes } from '@/current-game/announcements/announcement-types';

export const announcements: Record<
  AnnouncementTypes,
  { header: string; message?: string }
> = {
  [AnnouncementTypes.DEATHS]: {
    header: 'Morts à annoncer',
  },
  [AnnouncementTypes.BEAR_GROWL]: {
    header: "Grognement de l'ours",
    message: "L'ours du montreur d'ours grogne",
  },
  [AnnouncementTypes.FOX_FAIL]: {
    header: 'Reniflement du renard',
    message:
      '<p>Non, ce groupe ne contient aucun loup-garou.</p><p>Le renard perd son pouvoir.</p>',
  },
  [AnnouncementTypes.FOX_SUCCESS]: {
    header: 'Reniflement du renard',
    message:
      '<p>Oui, ce groupe contient un loup-garou.</p><p>Le renard garde son pouvoir.</p>',
  },
  [AnnouncementTypes.ANCIEN_KILLED_BY_INNOCENTS]: {
    header: 'Perte des pouvoirs',
    message:
      "<p>L'Ancien du village a été tué par des innocents.</p><p>Tous les innocents perdent leurs pouvoirs.</p>",
  },
  [AnnouncementTypes.IDIOT_PARDONED]: {
    header: 'Idiot gracié',
    message:
      "<p>Les villageois décide de gracier l'Idiot.</p><p>L'Idiot ne pourra plus voter.</p>",
  },
  [AnnouncementTypes.WOLF_KILLED_BY_CHEVALIER]: {
    header: "Mort par l'épée rouillée",
    message: "{{ playerName }} a été tué par l'épée rouillée du chevalier.",
  },
};
