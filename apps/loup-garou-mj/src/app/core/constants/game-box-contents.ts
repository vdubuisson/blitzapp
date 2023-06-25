import { GameBoxEnum } from '../enums/game-box.enum';
import { PlayerRoleEnum } from '../enums/player-role.enum';

export const GAME_BOX_CONTENTS: { [box: string]: PlayerRoleEnum[] } = {
  [GameBoxEnum.CORE]: [
    PlayerRoleEnum.CHASSEUR,
    PlayerRoleEnum.CUPIDON,
    PlayerRoleEnum.LOUP_GAROU,
    PlayerRoleEnum.PETITE_FILLE,
    PlayerRoleEnum.VILLAGEOIS,
    PlayerRoleEnum.SORCIERE,
    // PlayerRoleEnum.VOLEUR,
    PlayerRoleEnum.VOYANTE,
  ],
  [GameBoxEnum.LUNE]: [PlayerRoleEnum.JOUEUR_FLUTE, PlayerRoleEnum.SALVATEUR],
  [GameBoxEnum.VILLAGE]: [PlayerRoleEnum.CORBEAU],
  [GameBoxEnum.PERSONNAGES]: [
    PlayerRoleEnum.CHIEN_LOUP,
    PlayerRoleEnum.SOEUR,
    PlayerRoleEnum.ENFANT_SAUVAGE,
    PlayerRoleEnum.GRAND_MECHANT_LOUP,
    PlayerRoleEnum.MONTREUR_OURS,
    PlayerRoleEnum.RENARD,
  ],
  [GameBoxEnum.PACTE]: Object.values(PlayerRoleEnum).filter(
    (role) => role !== PlayerRoleEnum.NOT_SELECTED
  ),
};
