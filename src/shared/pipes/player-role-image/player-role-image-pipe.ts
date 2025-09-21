import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRole } from '@/types/player-role';

@Pipe({
  name: 'playerRoleImage',
  standalone: true,
})
export class PlayerRoleImagePipe implements PipeTransform {
  private static readonly IMAGES_PATH = 'images/roles/';

  transform(role: PlayerRole): string {
    return `${PlayerRoleImagePipe.IMAGES_PATH}${role.toLowerCase()}.webp`;
  }
}
