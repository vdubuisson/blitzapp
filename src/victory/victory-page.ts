import { Victory } from '@/types/victory';
import { VictoryNamePipe } from '@/victory/victory-name/victory-name-pipe';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lgmj-victory-page',
  imports: [RouterLink, VictoryNamePipe],
  templateUrl: './victory-page.html',
  styleUrls: ['./victory-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VictoryPage {
  protected readonly victory = input<Victory>(Victory.NONE);
  protected readonly victoryTitle = computed<string>(() =>
    this.victory() === Victory.NONE ? 'Match nul' : 'Victoire',
  );

  private readonly newGameCreator = inject(NewGameCreator);

  protected replay(): void {
    this.newGameCreator.replay();
  }
}
