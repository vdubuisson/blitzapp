import { RoundEnum } from '../enums/round.enum';

export const ROUND_NAMES: Record<RoundEnum, string> = {
  [RoundEnum.CUPIDON]: 'Tir de Cupidon',
  [RoundEnum.VOYANTE]: 'Vision de la voyante',
  [RoundEnum.AMOUREUX]: 'Découverte des amoureux',
  [RoundEnum.LOUP_GAROU]: 'Attaque des loups-garous',
  [RoundEnum.SORCIERE_HEALTH]: 'Soin de la sorcière',
  [RoundEnum.SORCIERE_KILL]: 'Potion de mort de la sorcière',
  [RoundEnum.VILLAGEOIS]: 'Vote des villageois',
  [RoundEnum.CAPITAINE]: 'Election du capitaine',
  [RoundEnum.CHASSEUR]: 'Tir du chasseur',
  [RoundEnum.JOUEUR_FLUTE]: 'Charme du joueur de flûte',
  [RoundEnum.CHARMED]: 'Découverte des charmés',
  [RoundEnum.CORBEAU]: 'Accusation du corbeau',
  [RoundEnum.ENFANT_SAUVAGE]: "Modèle de l'enfant sauvage",
  [RoundEnum.SALVATEUR]: 'Protection du salvateur',
  [RoundEnum.GRAND_MECHANT_LOUP]: 'Attaque du grand méchant loup',
  [RoundEnum.MONTREUR_OURS]: "Grognement de l'ours",
  [RoundEnum.RENARD]: 'Reniflement du renard',
  [RoundEnum.CHIEN_LOUP]: 'Choix du chien-loup',
  [RoundEnum.SOEURS]: 'Découverte des 2 sœurs',
  [RoundEnum.FRERES]: 'Découverte des 3 frères',
};
