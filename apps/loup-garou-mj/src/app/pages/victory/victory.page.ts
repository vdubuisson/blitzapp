import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VictoryEnum } from '../../core/enums/victory.enum';
import { IonicModule } from '@ionic/angular';
import { VictoryNamePipe } from '../../core/pipes/victory-name/victory-name.pipe';

@Component({
  selector: 'lgmj-victory',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, VictoryNamePipe],
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
