import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlayerComponent } from '@/components/player/player.component';
import { PlayerDisplayModeEnum } from '@/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { RoundNamePipe } from '@/pipes/round-name/round-name.pipe';
import { GameService } from '@/services/game/game.service';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { CurrentRoundStore } from '@/stores/current-round/current-round.store';
import { DayCountStore } from '@/stores/day-count/day-count.store';

@Component({
  selector: 'lgmj-game',
  imports: [RoundNamePipe, PlayerComponent],
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GamePage {
  private readonly gameService = inject(GameService);

  protected readonly players: Signal<Player[]> =
    inject(CurrentPlayersStore).state.asReadonly();
  protected readonly round: Signal<Round | null> =
    inject(CurrentRoundStore).state.asReadonly();
  protected readonly dayCount: Signal<number> =
    inject(DayCountStore).state.asReadonly();

  protected readonly playerDisplayMode: Signal<PlayerDisplayModeEnum> =
    computed(() => {
      if (this.round() !== null) {
        const currentRound = this.round() as Round;
        if (currentRound.type === RoundTypeEnum.ROLES) {
          return PlayerDisplayModeEnum.EDIT_ROLE;
        } else if (currentRound.maxSelectable > 1) {
          return PlayerDisplayModeEnum.SELECT_MULTI;
        } else if (currentRound.maxSelectable === 1) {
          return PlayerDisplayModeEnum.SELECT_SINGLE;
        } else {
          return PlayerDisplayModeEnum.DEFAULT;
        }
      } else {
        return PlayerDisplayModeEnum.DEFAULT;
      }
    });

  protected readonly selectedPlayer: WritableSignal<number | undefined> =
    signal(undefined);
  protected readonly selectedPlayers = computed<Set<number>>(() => {
    const selection =
      this.playersMultiSelectionChange()?.source?.selected ?? [];
    return new Set(selection);
  });
  protected readonly selectedRole: WritableSignal<PlayerRoleEnum | undefined> =
    signal(undefined);

  private readonly playersMultiSelection = new SelectionModel<number>(true);
  private readonly playersMultiSelectionChange = toSignal(
    this.playersMultiSelection.changed,
  );

  protected readonly submitDisabled: Signal<boolean> = computed(() => {
    switch (this.playerDisplayMode()) {
      case PlayerDisplayModeEnum.SELECT_SINGLE:
        return (
          (this.round()?.minSelectable ?? 0) > 0 &&
          this.selectedPlayer() === undefined
        );
      case PlayerDisplayModeEnum.SELECT_MULTI:
        return (
          this.selectedPlayers().size > (this.round()?.maxSelectable ?? 0) ||
          this.selectedPlayers().size < (this.round()?.minSelectable ?? 0)
        );
      case PlayerDisplayModeEnum.EDIT_ROLE:
        return (
          (this.round()?.minSelectable ?? 0) > 0 &&
          this.selectedRole() === undefined
        );
      default:
        return false;
    }
  });

  protected readonly displayEqualityButton: Signal<boolean> = computed(
    () =>
      this.players().some(
        (player) => player.role === PlayerRoleEnum.BOUC && !player.isDead,
      ) && this.round()?.role === RoundEnum.VILLAGEOIS,
  );

  protected readonly isBeforeGame: Signal<boolean> = computed(
    () => this.round()?.role === RoundEnum.SECTAIRE,
  );

  protected readonly PlayerDisplayModeEnum = PlayerDisplayModeEnum;

  protected onPlayerChecked(id: number, checked: boolean): void {
    if (this.playerDisplayMode() === PlayerDisplayModeEnum.SELECT_MULTI) {
      this.playersMultiSelection.toggle(id);
    } else {
      this.selectedPlayer.set(checked ? id : undefined);
    }
  }

  protected onRoleSelect(role: PlayerRoleEnum): void {
    this.selectedRole.set(role);
  }

  protected onSubmit(): void {
    const selectedPlayers =
      this.selectedPlayer() !== undefined
        ? [this.selectedPlayer() as number]
        : Array.from(this.selectedPlayers());
    this.gameService.submitRoundAction(selectedPlayers, this.selectedRole());
    this.cleanSelection();
  }

  protected onEquality(): void {
    this.gameService.submitRoundAction([], undefined, true);
    this.cleanSelection();
  }

  private cleanSelection(): void {
    this.selectedPlayer.set(undefined);
    this.playersMultiSelection.clear();
    this.selectedRole.set(undefined);
  }
}
