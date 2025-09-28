import { GameBox } from '@/config/game-boxes';
import { GAME_BOX_NAMES } from '@/texts/game-box-names';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameBoxName',
  standalone: true,
})
export class GameBoxNamePipe implements PipeTransform {
  transform(gameBox: GameBox): string {
    return GAME_BOX_NAMES[gameBox];
  }
}
