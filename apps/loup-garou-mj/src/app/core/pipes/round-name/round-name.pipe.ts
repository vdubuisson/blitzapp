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
      case RoundEnum.JOUEUR_FLUTE:
        return 'Charme du joueur de flûte';
      case RoundEnum.CHARMED:
        return 'Découverte des charmés';
      case RoundEnum.CORBEAU:
        return 'Accusation du corbeau';
      case RoundEnum.ENFANT_SAUVAGE:
        return "Modèle de l'enfant sauvage";
      case RoundEnum.SALVATEUR:
        return 'Protection du salvateur';
      case RoundEnum.GRAND_MECHANT_LOUP:
        return 'Attaque du grand méchant loup';
      case RoundEnum.MONTREUR_OURS:
        return "Grognement de l'ours";
      case RoundEnum.RENARD:
        return 'Reniflement du renard';
      case RoundEnum.CHIEN_LOUP:
        return 'Choix du chien-loup';
      case RoundEnum.SOEURS:
        return 'Découverte des 2 sœurs';
      case RoundEnum.FRERES:
        return 'Découverte des 3 frères';
      default:
        return '';
    }
  }
}
