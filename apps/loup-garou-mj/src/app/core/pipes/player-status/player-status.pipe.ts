import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { STATUS_ICONS } from '../../values/status-icons';

@Pipe({
  name: 'playerStatus',
  standalone: true,
})
export class PlayerStatusPipe implements PipeTransform {
  transform(status: PlayerStatusEnum): string {
    return STATUS_ICONS[status];
  }
}
