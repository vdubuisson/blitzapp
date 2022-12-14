import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStatusEnum } from '../../enums/player-status.enum';

@Pipe({
  name: 'playerStatus',
  standalone: true,
})
export class PlayerStatusPipe implements PipeTransform {
  transform(status: PlayerStatusEnum): string {
    switch (status) {
      case PlayerStatusEnum.WOLF_TARGET:
        return 'ðš';
      case PlayerStatusEnum.HEALTH_POTION:
        return 'ð';
      case PlayerStatusEnum.DEATH_POTION:
        return 'ðĪ';
      case PlayerStatusEnum.CAPTAIN:
        return 'ðïļ';
      case PlayerStatusEnum.LOVER:
        return 'ð';
      // case PlayerStatusEnum.FIRST_DEATH:
      //   return 'â ïļ';
      case PlayerStatusEnum.PROTECTED:
        return 'ðĄïļ';
      case PlayerStatusEnum.NO_POWER:
        return 'â';
      case PlayerStatusEnum.CHARMED:
        return 'ðķ';
      case PlayerStatusEnum.CHILD_MODEL:
        return 'ð§';
      case PlayerStatusEnum.RAVEN:
        return 'ðŠķ';
      // case PlayerStatusEnum.RUSTY_SWORD:
      //   return 'ðĄïļ';
      // case PlayerStatusEnum.COMEDIAN:
      //   return 'ð­';
      // case PlayerStatusEnum.INFECTED:
      //   return 'ðĐļ';
      default:
        return '';
    }
  }
}
