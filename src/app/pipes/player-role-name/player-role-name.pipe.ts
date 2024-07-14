import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { ROLE_NAMES } from '@/values/role-names';

@Pipe({
  name: 'playerRoleName',
  standalone: true,
})
export class PlayerRoleNamePipe implements PipeTransform {
  transform(role: PlayerRoleEnum): string {
    return ROLE_NAMES[role];
  }
}
