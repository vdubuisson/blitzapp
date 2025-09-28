import { GameBox, GameBoxEnum } from '@/config/game-boxes';
import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';

const excludedRoles: PlayerRole[] = [
  PlayerRoleEnum.NOT_SELECTED,
  PlayerRoleEnum.VILLAGEOIS,
  PlayerRoleEnum.LOUP_GAROU,
];

export const GAME_BOX_CONTENTS: Record<GameBox, PlayerRole[]> = {
  [GameBoxEnum.CORE]: [
    PlayerRoleEnum.CHASSEUR,
    PlayerRoleEnum.CUPIDON,
    PlayerRoleEnum.PETITE_FILLE,
    PlayerRoleEnum.SORCIERE,
    PlayerRoleEnum.VOLEUR,
    PlayerRoleEnum.VOYANTE,
  ],
  [GameBoxEnum.LUNE]: [
    PlayerRoleEnum.JOUEUR_FLUTE,
    PlayerRoleEnum.SALVATEUR,
    PlayerRoleEnum.ANCIEN,
    PlayerRoleEnum.IDIOT,
    PlayerRoleEnum.BOUC,
  ],
  [GameBoxEnum.VILLAGE]: [PlayerRoleEnum.CORBEAU, PlayerRoleEnum.LOUP_BLANC],
  [GameBoxEnum.PERSONNAGES]: [
    PlayerRoleEnum.CHIEN_LOUP,
    PlayerRoleEnum.SOEUR,
    PlayerRoleEnum.FRERE,
    PlayerRoleEnum.ENFANT_SAUVAGE,
    PlayerRoleEnum.GRAND_MECHANT_LOUP,
    PlayerRoleEnum.MONTREUR_OURS,
    PlayerRoleEnum.RENARD,
    PlayerRoleEnum.ANGE,
    PlayerRoleEnum.CHEVALIER,
    PlayerRoleEnum.SECTAIRE,
    PlayerRoleEnum.PERE_LOUPS,
  ],
  [GameBoxEnum.PACTE]: Object.values(PlayerRoleEnum).filter(
    (role: PlayerRole) => !excludedRoles.includes(role),
  ),
};
