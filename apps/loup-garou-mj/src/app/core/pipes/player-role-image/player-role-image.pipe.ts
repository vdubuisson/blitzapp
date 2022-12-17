import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';

@Pipe({
  name: 'playerRoleImage',
  standalone: true,
})
export class PlayerRoleImagePipe implements PipeTransform {
  private static readonly IMAGES_PATH = 'assets/images/roles/';

  transform(role: PlayerRoleEnum): string {
    switch (role) {
      case PlayerRoleEnum.VILLAGEOIS:
        return `${PlayerRoleImagePipe.IMAGES_PATH}villageois.webp`;
      case PlayerRoleEnum.LOUP_GAROU:
        return `${PlayerRoleImagePipe.IMAGES_PATH}loup_garou.webp`;
      case PlayerRoleEnum.CHASSEUR:
        return `${PlayerRoleImagePipe.IMAGES_PATH}chasseur.webp`;
      case PlayerRoleEnum.CUPIDON:
        return `${PlayerRoleImagePipe.IMAGES_PATH}cupidon.webp`;
      case PlayerRoleEnum.PETITE_FILLE:
        return `${PlayerRoleImagePipe.IMAGES_PATH}petite_fille.webp`;
      case PlayerRoleEnum.SORCIERE:
        return `${PlayerRoleImagePipe.IMAGES_PATH}sorciere.webp`;
      case PlayerRoleEnum.VOLEUR:
        return `${PlayerRoleImagePipe.IMAGES_PATH}voleur.webp`;
      case PlayerRoleEnum.VOYANTE:
        return `${PlayerRoleImagePipe.IMAGES_PATH}voyante.webp`;
      case PlayerRoleEnum.JOUEUR_FLUTE:
        return `${PlayerRoleImagePipe.IMAGES_PATH}joueur_flute.webp`;
      case PlayerRoleEnum.CORBEAU:
        return `${PlayerRoleImagePipe.IMAGES_PATH}corbeau.webp`;
      case PlayerRoleEnum.ENFANT_SAUVAGE:
        return `${PlayerRoleImagePipe.IMAGES_PATH}enfant_sauvage.webp`;
      case PlayerRoleEnum.SALVATEUR:
        return `${PlayerRoleImagePipe.IMAGES_PATH}salvateur.webp`;
      default:
        return '';
    }
  }
}
