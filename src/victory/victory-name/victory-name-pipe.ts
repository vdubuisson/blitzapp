import { Pipe, PipeTransform } from '@angular/core';
import { Victory } from '@/types/victory';
import { VICTORY_NAMES } from '@/texts/victory-names';

@Pipe({
  name: 'victoryName',
  standalone: true,
})
export class VictoryNamePipe implements PipeTransform {
  transform(victory: Victory): string {
    return VICTORY_NAMES[victory];
  }
}
