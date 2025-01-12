import { NewPlayerComponent } from '@/components/new-player/new-player.component';
import { Player } from '@/models/player.model';
import { NewGameService } from '@/services/new-game/new-game.service';
import { CardChoiceStore } from '@/stores/card-choice/card-choice.store';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faGripLines,
  faMinus,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lgmj-new-game',
  imports: [
    NewPlayerComponent,
    RouterLink,
    FaIconComponent,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NewGamePage {
  private readonly newGameService = inject(NewGameService);
  private readonly cardChoiceState = inject(CardChoiceStore).state.asReadonly();

  protected readonly players: Signal<Player[]> =
    this.newGameService.currentPlayers;

  protected readonly canValidate: Signal<boolean> = computed(
    () => this.players().length === this.playersCount(),
  );

  protected readonly playersCount: Signal<number> = computed(
    () => this.cardChoiceState().playersNumber,
  );

  protected readonly dangerIcon = faTriangleExclamation;
  protected readonly removeIcon = faMinus;
  protected readonly dragIcon = faGripLines;

  protected addPlayer(name: string): void {
    this.newGameService.addPlayer(name);
  }

  protected reorderPlayer(event: CdkDragDrop<Player[]>): void {
    this.newGameService.reorderPlayers(event.previousIndex, event.currentIndex);
  }

  protected removePlayer(id: number): void {
    this.newGameService.removePlayer(id);
  }
}
