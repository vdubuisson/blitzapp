import { Component } from '@angular/core';
import { VictoryEnum } from '../core/enums/victory.enum';

@Component({
  selector: 'lgmj-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  victoryEnum = VictoryEnum.LOUP_GAROU;
}
