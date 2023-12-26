import { GameBoxEnum } from '../enums/game-box.enum';
import { PlayerRoleEnum } from '../enums/player-role.enum';

export const GAME_BOX_CONTENTS: { [box: string]: PlayerRoleEnum[] } = {
  [GameBoxEnum.CORE]: [
    PlayerRoleEnum.CHASSEUR,
    PlayerRoleEnum.CUPIDON,
    PlayerRoleEnum.PETITE_FILLE,
    PlayerRoleEnum.SORCIERE,
    PlayerRoleEnum.VOLEUR,
    PlayerRoleEnum.VOYANTE,
  ],
  [GameBoxEnum.LUNE]: [PlayerRoleEnum.JOUEUR_FLUTE, PlayerRoleEnum.SALVATEUR],
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
  ],
  [GameBoxEnum.PACTE]: Object.values(PlayerRoleEnum).filter(
    (role) =>
      ![
        PlayerRoleEnum.NOT_SELECTED,
        PlayerRoleEnum.VILLAGEOIS,
        PlayerRoleEnum.LOUP_GAROU,
      ].includes(role),
  ),
};
