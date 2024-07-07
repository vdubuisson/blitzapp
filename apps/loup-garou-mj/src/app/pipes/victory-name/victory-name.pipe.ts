import { Pipe, PipeTransform } from '@angular/core';
import { VictoryEnum } from '../../enums/victory.enum';
import { VICTORY_NAMES } from '../../values/victory-names';

@Pipe({
  name: 'victoryName',
  standalone: true,
})
export class VictoryNamePipe implements PipeTransform {
  transform(victory: VictoryEnum): string {
    return VICTORY_NAMES[victory];
  }
}
