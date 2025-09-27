import { NewPlayer } from '@/new-game/players/new-player/new-player';
import { Player } from '@/shared/types/player';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
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
  selector: 'lgmj-new-game-player-list-page',
  imports: [
    NewPlayer,
    RouterLink,
    FaIconComponent,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  templateUrl: './new-game-players-page.html',
  styleUrl: './new-game-players-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NewGamePlayersPage {
  private readonly newGameCreator = inject(NewGameCreator);
  private readonly cardChoiceState = inject(CardChoiceStore).state.asReadonly();

  protected readonly players: Signal<Player[]> =
    this.newGameCreator.currentPlayers;

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
    this.newGameCreator.addPlayer(name);
  }

  protected reorderPlayer(event: CdkDragDrop<Player[]>): void {
    this.newGameCreator.reorderPlayers(event.previousIndex, event.currentIndex);
  }

  protected removePlayer(id: number): void {
    this.newGameCreator.removePlayer(id);
  }
}
