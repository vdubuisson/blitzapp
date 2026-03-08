import { ModalManager } from '@/layout/modal/modal-manager';
import { SelectOverlayContent } from '@/layout/select-overlay/select-overlay-content';
import { SelectOverlayManager } from '@/layout/select-overlay/select-overlay-manager';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { NewPlayer } from '@/new-game/players/new-player/new-player';
import { PlayersGroupStorage } from '@/players-group/players-group-storage';
import { Player } from '@/shared/types/player';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faMinus,
  faSort,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';

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
  private readonly playersGroupStorage = inject(PlayersGroupStorage);
  private readonly modalManager = inject(ModalManager);
  private readonly destroyRef = inject(DestroyRef);
  private readonly selectOverlayManager = inject(SelectOverlayManager);

  private readonly cardChoiceState = inject(CardChoiceStore).state.asReadonly();

  protected readonly players: Signal<Player[]> =
    this.newGameCreator.currentPlayers;

  protected readonly canValidate: Signal<boolean> = computed(
    () => this.players().length === this.playersCount(),
  );

  protected readonly playersCount: Signal<number> = computed(
    () => this.cardChoiceState().playersNumber,
  );

  protected readonly playersGroups = this.playersGroupStorage.getGroups();

  protected readonly dangerIcon = faTriangleExclamation;
  protected readonly removeIcon = faMinus;
  protected readonly dragIcon = faSort;

  protected addPlayer(name: string): void {
    this.newGameCreator.addPlayer(name);
  }

  protected reorderPlayer(event: CdkDragDrop<Player[]>): void {
    this.newGameCreator.reorderPlayers(event.previousIndex, event.currentIndex);
  }

  protected removePlayer(id: number): void {
    this.newGameCreator.removePlayer(id);
  }

  protected openGroupsOverlay(): void {
    const selectOverlayContent: SelectOverlayContent = {
      header: 'Charger un groupe de joueurs',
      options: this.playersGroups().map((group) => ({
        value: group.id!,
        label: group.name,
      }))
    };
    this.selectOverlayManager.selectedValue
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((groupId) => {
        const group = this.playersGroups().find((g) => g.id === groupId);
        if (group) {
          this.newGameCreator.loadPlayersGroup(group);
        }
      });
    this.selectOverlayManager.openOverlay(selectOverlayContent);
  }

  protected openGroupsForm(): void {
    this.modalManager
      .showTextFormModal({
        header: 'Nom du groupe',
        initialValue: `Groupe ${(this.playersGroups()?.length ?? 0) + 1}`,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((name) => {
        if (name) {
          this.saveAsPlayersGroup(name);
        }
      });
  }

  private saveAsPlayersGroup(name: string): void {
    this.playersGroupStorage
      .addGroup({
        name,
        playersNames: this.players().map((player) => player.name),
      });
  }
}
