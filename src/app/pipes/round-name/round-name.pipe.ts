import { Pipe, PipeTransform } from '@angular/core';
import { RoundEnum } from '@/enums/round.enum';
import { ROUND_NAMES } from '@/values/round-names';

@Pipe({
  name: 'roundName',
  standalone: true,
})
export class RoundNamePipe implements PipeTransform {
  transform(round: RoundEnum): string {
    return ROUND_NAMES[round];
  }
}
