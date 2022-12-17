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
        return '🐺';
      case PlayerStatusEnum.HEALTH_POTION:
        return '💚';
      case PlayerStatusEnum.DEATH_POTION:
        return '🖤';
      case PlayerStatusEnum.CAPTAIN:
        return '🎖️';
      case PlayerStatusEnum.LOVER:
        return '💕';
      // case PlayerStatusEnum.FIRST_DEATH:
      //   return '☠️';
      // case PlayerStatusEnum.PROTECTED:
      //   return '🛡️';
      // case PlayerStatusEnum.NO_POWER:
      //   return '❌';
      case PlayerStatusEnum.CHARMED:
        return '🎶';
      case PlayerStatusEnum.CHILD_MODEL:
        return '🧒';
      case PlayerStatusEnum.RAVEN:
        return '🪶';
      // case PlayerStatusEnum.RUSTY_SWORD:
      //   return '🗡️';
      // case PlayerStatusEnum.COMEDIAN:
      //   return '🎭';
      // case PlayerStatusEnum.INFECTED:
      //   return '🩸';
      default:
        return '';
    }
  }
}
