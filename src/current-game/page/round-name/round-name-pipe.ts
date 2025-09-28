import { ROUND_NAMES } from '@/texts/round-names';
import { Round } from '@/types/round';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundName',
  standalone: true,
})
export class RoundNamePipe implements PipeTransform {
  transform(round: Round): string {
    return ROUND_NAMES[round];
  }
}
