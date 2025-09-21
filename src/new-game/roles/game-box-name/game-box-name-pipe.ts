import { Pipe, PipeTransform } from '@angular/core';
import { GameBoxes } from '@/config/game-boxes';
import { GAME_BOX_NAMES } from '@/texts/game-box-names';

@Pipe({
  name: 'gameBoxName',
  standalone: true,
})
export class GameBoxNamePipe implements PipeTransform {
  transform(gameBox: GameBoxes): string {
    return GAME_BOX_NAMES[gameBox];
  }
}
