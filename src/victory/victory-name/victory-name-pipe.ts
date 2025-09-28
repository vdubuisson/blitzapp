import { VICTORY_NAMES } from '@/texts/victory-names';
import { Victory } from '@/types/victory';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'victoryName',
  standalone: true,
})
export class VictoryNamePipe implements PipeTransform {
  transform(victory: Victory): string {
    return VICTORY_NAMES[victory];
  }
}
