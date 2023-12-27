import { PlayerRoleEnum } from '../enums/player-role.enum';
import { RoundEnum } from '../enums/round.enum';

export const ROLE_ROUNDS_CONFIG: Record<PlayerRoleEnum, RoundEnum[]> = {
  [PlayerRoleEnum.NOT_SELECTED]: [],
  [PlayerRoleEnum.VILLAGEOIS]: [],
  [PlayerRoleEnum.LOUP_GAROU]: [],
  [PlayerRoleEnum.CHASSEUR]: [RoundEnum.CHASSEUR],
  [PlayerRoleEnum.CUPIDON]: [RoundEnum.CUPIDON, RoundEnum.AMOUREUX],
  [PlayerRoleEnum.PETITE_FILLE]: [],
  [PlayerRoleEnum.SORCIERE]: [
    RoundEnum.SORCIERE_HEALTH,
    RoundEnum.SORCIERE_KILL,
  ],
  [PlayerRoleEnum.VOYANTE]: [RoundEnum.VOYANTE],
  [PlayerRoleEnum.JOUEUR_FLUTE]: [RoundEnum.JOUEUR_FLUTE, RoundEnum.CHARMED],
  [PlayerRoleEnum.CORBEAU]: [RoundEnum.CORBEAU],
  [PlayerRoleEnum.ENFANT_SAUVAGE]: [RoundEnum.ENFANT_SAUVAGE],
  [PlayerRoleEnum.SALVATEUR]: [RoundEnum.SALVATEUR],
  [PlayerRoleEnum.GRAND_MECHANT_LOUP]: [RoundEnum.GRAND_MECHANT_LOUP],
  [PlayerRoleEnum.MONTREUR_OURS]: [RoundEnum.MONTREUR_OURS],
  [PlayerRoleEnum.RENARD]: [RoundEnum.RENARD],
  [PlayerRoleEnum.CHIEN_LOUP]: [RoundEnum.CHIEN_LOUP],
  [PlayerRoleEnum.SOEUR]: [RoundEnum.SOEURS],
  [PlayerRoleEnum.FRERE]: [RoundEnum.FRERES],
  [PlayerRoleEnum.LOUP_BLANC]: [RoundEnum.LOUP_BLANC],
  [PlayerRoleEnum.VOLEUR]: [RoundEnum.VOLEUR],
  [PlayerRoleEnum.ANGE]: [],
  [PlayerRoleEnum.ANCIEN]: [],
  [PlayerRoleEnum.IDIOT]: [],
};
