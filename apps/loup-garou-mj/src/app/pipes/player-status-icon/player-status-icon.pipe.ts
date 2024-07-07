import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { STATUS_ICONS } from '../../values/status-icons';

@Pipe({
  name: 'playerStatusIcon',
  standalone: true,
})
export class PlayerStatusIconPipe implements PipeTransform {
  transform(status: PlayerStatusEnum): string {
    return STATUS_ICONS[status];
  }
}
