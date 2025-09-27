import { GameBoxes } from '@/config/game-boxes';
import { PlayerRole } from '@/types/player-role';

export const GAME_BOX_CONTENTS: Record<string, PlayerRole[]> = {
  [GameBoxes.CORE]: [
    PlayerRole.CHASSEUR,
    PlayerRole.CUPIDON,
    PlayerRole.PETITE_FILLE,
    PlayerRole.SORCIERE,
    PlayerRole.VOLEUR,
    PlayerRole.VOYANTE,
  ],
  [GameBoxes.LUNE]: [
    PlayerRole.JOUEUR_FLUTE,
    PlayerRole.SALVATEUR,
    PlayerRole.ANCIEN,
    PlayerRole.IDIOT,
    PlayerRole.BOUC,
  ],
  [GameBoxes.VILLAGE]: [PlayerRole.CORBEAU, PlayerRole.LOUP_BLANC],
  [GameBoxes.PERSONNAGES]: [
    PlayerRole.CHIEN_LOUP,
    PlayerRole.SOEUR,
    PlayerRole.FRERE,
    PlayerRole.ENFANT_SAUVAGE,
    PlayerRole.GRAND_MECHANT_LOUP,
    PlayerRole.MONTREUR_OURS,
    PlayerRole.RENARD,
    PlayerRole.ANGE,
    PlayerRole.CHEVALIER,
    PlayerRole.SECTAIRE,
    PlayerRole.PERE_LOUPS,
  ],
  [GameBoxes.PACTE]: Object.values(PlayerRole).filter(
    (role) =>
      ![
        PlayerRole.NOT_SELECTED,
        PlayerRole.VILLAGEOIS,
        PlayerRole.LOUP_GAROU,
      ].includes(role),
  ),
};
