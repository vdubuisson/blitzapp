import { VictoryEnum } from '@/enums/victory.enum';
import { VictoryNamePipe } from '@/pipes/victory-name/victory-name.pipe';
import { NewGameService } from '@/services/new-game/new-game.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lgmj-victory',
  standalone: true,
  imports: [RouterLink, VictoryNamePipe],
  templateUrl: './victory.page.html',
  styleUrls: ['./victory.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VictoryPage {
  @Input({ required: true }) set victory(victory: VictoryEnum) {
    this._victory = victory;
    this.victoryTitle = victory === VictoryEnum.NONE ? 'Match nul' : 'Victoire';
  }

  protected _victory = VictoryEnum.NONE;
  protected victoryTitle = 'Match nul';

  private readonly newGameService = inject(NewGameService);

  protected replay(): void {
    this.newGameService.replay();
  }
}
