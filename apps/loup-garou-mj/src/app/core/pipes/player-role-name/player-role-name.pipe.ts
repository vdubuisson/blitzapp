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
      default:
        return '';
    }
  }
}
