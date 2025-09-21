import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRole } from '@/types/player-role';
import { ROLE_NAMES } from '@/texts/role-names';

@Pipe({
  name: 'playerRoleName',
  standalone: true,
})
export class PlayerRoleNamePipe implements PipeTransform {
  transform(role: PlayerRole): string {
    return ROLE_NAMES[role];
  }
}
