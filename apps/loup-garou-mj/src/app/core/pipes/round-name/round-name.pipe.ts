import { Pipe, PipeTransform } from '@angular/core';
import { RoundEnum } from '../../enums/round.enum';

@Pipe({
  name: 'roundName',
  standalone: true,
})
export class RoundNamePipe implements PipeTransform {
  transform(round: RoundEnum): string {
    switch (round) {
      case RoundEnum.VOLEUR:
        return 'Choix du voleur';
      case RoundEnum.CUPIDON:
        return 'Tir de Cupidon';
      case RoundEnum.VOYANTE:
        return 'Vision de la voyante';
      case RoundEnum.AMOUREUX:
        return 'Découverte des amoureux';
      case RoundEnum.LOUP_GAROU:
        return 'Attaque des loups-garous';
      case RoundEnum.SORCIERE_HEALTH:
        return 'Soin de la sorcière';
      case RoundEnum.SORCIERE_KILL:
        return 'Potion de mort de la sorcière';
      case RoundEnum.VILLAGEOIS:
        return 'Vote des villageois';
      case RoundEnum.CAPITAINE:
        return 'Election du capitaine';
      case RoundEnum.CHASSEUR:
        return 'Tir du chasseur';
      default:
        return '';
    }
  }
}