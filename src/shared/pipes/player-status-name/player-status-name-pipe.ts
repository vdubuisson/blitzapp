import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatus } from '@/types/player-status';
import { STATUS_NAMES } from '@/texts/status-names';

@Pipe({
  name: 'playerStatusName',
  standalone: true,
})
export class PlayerStatusNamePipe implements PipeTransform {
  transform(status: PlayerStatus): string {
    return STATUS_NAMES[status];
  }
}
