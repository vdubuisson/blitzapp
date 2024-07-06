import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRoleEnum } from '../../enums/player-role.enum';

@Pipe({
  name: 'playerRoleImage',
  standalone: true,
})
export class PlayerRoleImagePipe implements PipeTransform {
  private static readonly IMAGES_PATH = 'images/roles/';

  transform(role: PlayerRoleEnum): string {
    return `${PlayerRoleImagePipe.IMAGES_PATH}${role.toLowerCase()}.webp`;
  }
}
