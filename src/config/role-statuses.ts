import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';

export const ROLE_STATUSES: Record<PlayerRole, PlayerStatus[]> = {
  [PlayerRole.NOT_SELECTED]: [],
  [PlayerRole.VILLAGEOIS]: [],
  [PlayerRole.LOUP_GAROU]: [PlayerStatus.WOLF_TARGET, PlayerStatus.DEVOURED],
  [PlayerRole.CHASSEUR]: [],
  [PlayerRole.CUPIDON]: [PlayerStatus.LOVER],
  [PlayerRole.PETITE_FILLE]: [],
  [PlayerRole.SORCIERE]: [
    PlayerStatus.HEALTH_POTION,
    PlayerStatus.DEATH_POTION,
  ],
  [PlayerRole.VOLEUR]: [],
  [PlayerRole.VOYANTE]: [],
  [PlayerRole.JOUEUR_FLUTE]: [PlayerStatus.CHARMED],
  [PlayerRole.CORBEAU]: [PlayerStatus.RAVEN],
  [PlayerRole.ENFANT_SAUVAGE]: [PlayerStatus.CHILD_MODEL],
  [PlayerRole.SALVATEUR]: [PlayerStatus.PROTECTED],
  [PlayerRole.GRAND_MECHANT_LOUP]: [
    PlayerStatus.WOLF_TARGET,
    PlayerStatus.DEVOURED,
  ],
  [PlayerRole.MONTREUR_OURS]: [],
  [PlayerRole.RENARD]: [PlayerStatus.NO_POWER],
  [PlayerRole.CHIEN_LOUP]: [PlayerStatus.WOLF_TARGET, PlayerStatus.DEVOURED],
  [PlayerRole.SOEUR]: [],
  [PlayerRole.FRERE]: [],
  [PlayerRole.LOUP_BLANC]: [PlayerStatus.WOLF_TARGET, PlayerStatus.DEVOURED],
  [PlayerRole.ANGE]: [],
  [PlayerRole.ANCIEN]: [PlayerStatus.INJURED],
  [PlayerRole.IDIOT]: [PlayerStatus.NO_VOTE],
  [PlayerRole.CHEVALIER]: [PlayerStatus.RUSTY_SWORD],
  [PlayerRole.BOUC]: [PlayerStatus.NO_VOTE],
  [PlayerRole.SECTAIRE]: [PlayerStatus.BLUE_TEAM, PlayerStatus.RED_TEAM],
  [PlayerRole.PERE_LOUPS]: [
    PlayerStatus.WOLF_TARGET,
    PlayerStatus.NO_POWER,
    PlayerStatus.INFECTED,
    PlayerStatus.DEVOURED,
  ],
};
