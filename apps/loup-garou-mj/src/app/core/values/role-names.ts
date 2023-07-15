import { PlayerRoleEnum } from '../enums/player-role.enum';

export const ROLE_NAMES: Record<PlayerRoleEnum, string> = {
  [PlayerRoleEnum.NOT_SELECTED]: '',
  [PlayerRoleEnum.VILLAGEOIS]: 'Villageois',
  [PlayerRoleEnum.LOUP_GAROU]: 'Loup-garou',
  [PlayerRoleEnum.CHASSEUR]: 'Chasseur',
  [PlayerRoleEnum.CUPIDON]: 'Cupidon',
  [PlayerRoleEnum.PETITE_FILLE]: 'Petite fille',
  [PlayerRoleEnum.SORCIERE]: 'Sorcière',
  [PlayerRoleEnum.VOYANTE]: 'Voyante',
  [PlayerRoleEnum.JOUEUR_FLUTE]: 'Joueur de flûte',
  [PlayerRoleEnum.CORBEAU]: 'Corbeau',
  [PlayerRoleEnum.ENFANT_SAUVAGE]: 'Enfant sauvage',
  [PlayerRoleEnum.SALVATEUR]: 'Salvateur',
  [PlayerRoleEnum.GRAND_MECHANT_LOUP]: 'Grand méchant loup',
  [PlayerRoleEnum.MONTREUR_OURS]: "Montreur d'ours",
  [PlayerRoleEnum.RENARD]: 'Renard',
  [PlayerRoleEnum.CHIEN_LOUP]: 'Chien-loup',
  [PlayerRoleEnum.SOEUR]: 'Sœur',
  [PlayerRoleEnum.FRERE]: 'Frère',
  [PlayerRoleEnum.LOUP_BLANC]: 'Loup-garou blanc',
};