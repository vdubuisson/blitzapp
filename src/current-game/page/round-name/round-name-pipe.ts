import { Pipe, PipeTransform } from '@angular/core';
import { Round } from '@/types/round';
import { ROUND_NAMES } from '@/texts/round-names';

@Pipe({
  name: 'roundName',
  standalone: true,
})
export class RoundNamePipe implements PipeTransform {
  transform(round: Round): string {
    return ROUND_NAMES[round];
  }
}
