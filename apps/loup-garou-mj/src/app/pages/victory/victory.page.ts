import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VictoryEnum } from '../../core/enums/victory.enum';
import { VictoryNamePipe } from '../../core/pipes/victory-name/victory-name.pipe';
import { HeaderComponent } from '../../core/components/header/header.component';
import { NewGameService } from '../../core/services/new-game/new-game.service';
import {
  IonButton,
  IonContent,
  IonNote,
  IonRouterLink,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-victory',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    VictoryNamePipe,
    HeaderComponent,
    IonRouterLink,
    IonContent,
    IonNote,
    IonText,
    IonButton,
  ],
  templateUrl: './victory.page.html',
  styleUrls: ['./victory.page.scss'],
})
export class VictoryPage {
  protected victory: VictoryEnum;
  protected victoryTitle: string;

  constructor(
    private route: ActivatedRoute,
    private newGameService: NewGameService,
  ) {
    this.victory = this.route.snapshot.queryParamMap.get(
      'victory',
    ) as VictoryEnum;
    this.victoryTitle =
      this.victory === VictoryEnum.NONE ? 'Match nul' : 'Victoire';
  }

  protected replay(): void {
    this.newGameService.replay();
  }
}
