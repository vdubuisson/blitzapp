import { Pipe, PipeTransform } from '@angular/core';
import { VictoryEnum } from '../../enums/victory.enum';

@Pipe({
  name: 'victoryName',
  standalone: true,
})
export class VictoryNamePipe implements PipeTransform {
  transform(victory: VictoryEnum | null): string {
    switch (victory) {
      case VictoryEnum.NONE:
        return 'Tout le monde est mort';
      case VictoryEnum.AMOUREUX:
        return 'Amoureux';
      case VictoryEnum.LOUP_GAROU:
        return 'Loups-garous';
      case VictoryEnum.VILLAGEOIS:
        return 'Villageois';
      default:
        return '';
    }
  }
}
