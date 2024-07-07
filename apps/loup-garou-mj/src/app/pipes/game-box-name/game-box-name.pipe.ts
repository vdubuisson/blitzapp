import { Pipe, PipeTransform } from '@angular/core';
import { GameBoxEnum } from '@/enums/game-box.enum';
import { GAME_BOX_NAMES } from '@/values/game-box-names';

@Pipe({
  name: 'gameBoxName',
  standalone: true,
})
export class GameBoxNamePipe implements PipeTransform {
  transform(gameBox: GameBoxEnum): string {
    return GAME_BOX_NAMES[gameBox];
  }
}
