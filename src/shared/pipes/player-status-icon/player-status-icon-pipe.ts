import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatus } from '@/types/player-status';
import { STATUS_ICONS } from './status-icons';

@Pipe({
  name: 'playerStatusIcon',
  standalone: true,
})
export class PlayerStatusIconPipe implements PipeTransform {
  transform(status: PlayerStatus): string {
    return STATUS_ICONS[status];
  }
}
