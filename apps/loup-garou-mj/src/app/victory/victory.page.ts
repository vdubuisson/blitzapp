import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VictoryEnum } from '../core/enums/victory.enum';

@Component({
  selector: 'lgmj-victory',
  templateUrl: './victory.page.html',
  styleUrls: ['./victory.page.scss'],
})
export class VictoryPage {
  protected victory: VictoryEnum | null;
  protected victoryTitle: string;

  constructor(private route: ActivatedRoute) {
    this.victory = this.route.snapshot.queryParamMap.get(
      'victory'
    ) as VictoryEnum;
    this.victoryTitle =
      this.victory === VictoryEnum.NONE ? 'Match nul' : 'Victoire';
  }
}
