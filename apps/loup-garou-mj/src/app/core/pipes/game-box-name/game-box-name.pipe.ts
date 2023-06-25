import { Pipe, PipeTransform } from '@angular/core';
import { GameBoxEnum } from '../../enums/game-box.enum';

@Pipe({
  name: 'gameBoxName',
  standalone: true,
})
export class GameBoxNamePipe implements PipeTransform {
  transform(gameBox: GameBoxEnum ): string {
    switch (gameBox) {
      case GameBoxEnum.CORE:
        return 'Boite de base'
      case GameBoxEnum.LUNE:
        return 'Extension - Nouvelle lune';
      case GameBoxEnum.VILLAGE:
        return 'Extension - Village';
      case GameBoxEnum.PERSONNAGES:
        return 'Extension - Personnages';
      case GameBoxEnum.PACTE:
        return 'Le Pacte';
    }
  }
}
