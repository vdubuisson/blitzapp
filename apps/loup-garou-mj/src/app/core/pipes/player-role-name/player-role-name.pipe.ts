import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';

@Pipe({
  name: 'playerRoleName',
  standalone: true,
})
export class PlayerRoleNamePipe implements PipeTransform {
  transform(role: PlayerRoleEnum): string {
    switch (role) {
      case PlayerRoleEnum.VILLAGEOIS:
        return 'Villageois';
      case PlayerRoleEnum.LOUP_GAROU:
        return 'Loup-Garou';
      case PlayerRoleEnum.CHASSEUR:
        return 'Chasseur';
      case PlayerRoleEnum.CUPIDON:
        return 'Cupidon';
      case PlayerRoleEnum.PETITE_FILLE:
        return 'Petite fille';
      case PlayerRoleEnum.SORCIERE:
        return 'Sorcière';
      case PlayerRoleEnum.VOLEUR:
        return 'Voleur';
      case PlayerRoleEnum.VOYANTE:
        return 'Voyante';
      case PlayerRoleEnum.JOUEUR_FLUTE:
        return 'Joueur de flûte';
      case PlayerRoleEnum.CORBEAU:
        return 'Corbeau';
      case PlayerRoleEnum.ENFANT_SAUVAGE:
        return 'Enfant sauvage';
      case PlayerRoleEnum.SALVATEUR:
        return 'Salvateur';
      case PlayerRoleEnum.GRAND_MECHANT_LOUP:
        return 'Grand méchant loup';
      case PlayerRoleEnum.MONTREUR_OURS:
        return "Montreur d'ours";
      case PlayerRoleEnum.RENARD:
        return 'Renard';
      default:
        return '';
    }
  }
}
