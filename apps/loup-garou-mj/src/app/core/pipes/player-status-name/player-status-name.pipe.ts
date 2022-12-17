import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatusEnum } from '../../enums/player-status.enum';

@Pipe({
  name: 'playerStatusName',
  standalone: true,
})
export class PlayerStatusNamePipe implements PipeTransform {
  transform(status: PlayerStatusEnum): string {
    switch (status) {
      case PlayerStatusEnum.WOLF_TARGET:
        return 'Cible loups-garous';
      case PlayerStatusEnum.HEALTH_POTION:
        return 'Potion de vie';
      case PlayerStatusEnum.DEATH_POTION:
        return 'Potion de mort';
      case PlayerStatusEnum.CAPTAIN:
        return 'Capitaine';
      case PlayerStatusEnum.LOVER:
        return 'Amoureux';
      // case PlayerStatusEnum.FIRST_DEATH:
      //   return 'Mort une fois';
      case PlayerStatusEnum.PROTECTED:
        return 'Protégé';
      // case PlayerStatusEnum.NO_POWER:
      //   return 'Plus de pouvoir';
      case PlayerStatusEnum.CHARMED:
        return 'Charmé';
      case PlayerStatusEnum.CHILD_MODEL:
        return "Modèle de l'enfant";
      case PlayerStatusEnum.RAVEN:
        return 'Cible du corbeau';
      // case PlayerStatusEnum.RUSTY_SWORD:
      //   return 'Touché par l'épée rouillée';
      // case PlayerStatusEnum.COMEDIAN:
      //   return 'Comédien';
      // case PlayerStatusEnum.INFECTED:
      //   return 'Infecté';
      default:
        return '';
    }
  }
}
