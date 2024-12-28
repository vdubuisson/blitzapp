import { VictoryEnum } from '@/enums/victory.enum';
import { VictoryNamePipe } from '@/pipes/victory-name/victory-name.pipe';
import { NewGameService } from '@/services/new-game/new-game.service';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lgmj-victory',
  imports: [RouterLink, VictoryNamePipe],
  templateUrl: './victory.page.html',
  styleUrls: ['./victory.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VictoryPage {
  protected readonly victory = input<VictoryEnum>(VictoryEnum.NONE);
  protected readonly victoryTitle = computed<string>(() =>
    this.victory() === VictoryEnum.NONE ? 'Match nul' : 'Victoire',
  );

  private readonly newGameService = inject(NewGameService);

  protected replay(): void {
    this.newGameService.replay();
  }
}
