import { ROLE_NAMES } from '@/texts/role-names';
import { PlayerRole } from '@/types/player-role';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerRoleName',
  standalone: true,
})
export class PlayerRoleNamePipe implements PipeTransform {
  transform(role: PlayerRole): string {
    return ROLE_NAMES[role];
  }
}
