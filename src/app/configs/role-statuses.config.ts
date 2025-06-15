import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export const ROLE_STATUSES_CONFIG: Record<PlayerRoleEnum, PlayerStatusEnum[]> =
  {
    [PlayerRoleEnum.NOT_SELECTED]: [],
    [PlayerRoleEnum.VILLAGEOIS]: [],
    [PlayerRoleEnum.LOUP_GAROU]: [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.DEVOURED,
    ],
    [PlayerRoleEnum.CHASSEUR]: [],
    [PlayerRoleEnum.CUPIDON]: [PlayerStatusEnum.LOVER],
    [PlayerRoleEnum.PETITE_FILLE]: [],
    [PlayerRoleEnum.SORCIERE]: [
      PlayerStatusEnum.HEALTH_POTION,
      PlayerStatusEnum.DEATH_POTION,
    ],
    [PlayerRoleEnum.VOLEUR]: [],
    [PlayerRoleEnum.VOYANTE]: [],
    [PlayerRoleEnum.JOUEUR_FLUTE]: [PlayerStatusEnum.CHARMED],
    [PlayerRoleEnum.CORBEAU]: [PlayerStatusEnum.RAVEN],
    [PlayerRoleEnum.ENFANT_SAUVAGE]: [PlayerStatusEnum.CHILD_MODEL],
    [PlayerRoleEnum.SALVATEUR]: [PlayerStatusEnum.PROTECTED],
    [PlayerRoleEnum.GRAND_MECHANT_LOUP]: [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.DEVOURED,
    ],
    [PlayerRoleEnum.MONTREUR_OURS]: [],
    [PlayerRoleEnum.RENARD]: [PlayerStatusEnum.NO_POWER],
    [PlayerRoleEnum.CHIEN_LOUP]: [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.DEVOURED,
    ],
    [PlayerRoleEnum.SOEUR]: [],
    [PlayerRoleEnum.FRERE]: [],
    [PlayerRoleEnum.LOUP_BLANC]: [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.DEVOURED,
    ],
    [PlayerRoleEnum.ANGE]: [],
    [PlayerRoleEnum.ANCIEN]: [PlayerStatusEnum.INJURED],
    [PlayerRoleEnum.IDIOT]: [PlayerStatusEnum.NO_VOTE],
    [PlayerRoleEnum.CHEVALIER]: [PlayerStatusEnum.RUSTY_SWORD],
    [PlayerRoleEnum.BOUC]: [PlayerStatusEnum.NO_VOTE],
    [PlayerRoleEnum.SECTAIRE]: [
      PlayerStatusEnum.BLUE_TEAM,
      PlayerStatusEnum.RED_TEAM,
    ],
    [PlayerRoleEnum.PERE_LOUPS]: [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.NO_POWER,
      PlayerStatusEnum.INFECTED,
      PlayerStatusEnum.DEVOURED,
    ],
  };
