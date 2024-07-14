import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { STATUS_NAMES } from '@/values/status-names';

@Pipe({
  name: 'playerStatusName',
  standalone: true,
})
export class PlayerStatusNamePipe implements PipeTransform {
  transform(status: PlayerStatusEnum): string {
    return STATUS_NAMES[status];
  }
}
