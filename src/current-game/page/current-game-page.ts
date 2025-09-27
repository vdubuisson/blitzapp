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
import { PlayerCard } from '@/shared/components/player-card/player-card';
import { PlayerDisplayMode } from '@/shared/components/player-card/player-display-mode';
import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { RoundNamePipe } from '@/current-game/page/round-name/round-name-pipe';
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { CurrentRoundConfigStore } from '@/current-game/orchestrator/current-round-config/current-round-config-store';
import { DayCountStore } from '@/current-game/orchestrator/day-count/day-count-store';

@Component({
  selector: 'lgmj-current-game-page',
  imports: [RoundNamePipe, PlayerCard],
  templateUrl: './current-game-page.html',
  styleUrl: './current-game-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CurrentGamePage {
  private readonly gameOrchestrator = inject(GameOrchestrator);

  protected readonly players: Signal<Player[]> =
    inject(CurrentPlayersStore).state.asReadonly();
  protected readonly roundConfig: Signal<RoundConfig | null> = inject(
    CurrentRoundConfigStore,
  ).state.asReadonly();
  protected readonly dayCount: Signal<number> =
    inject(DayCountStore).state.asReadonly();

  protected readonly playerDisplayMode: Signal<PlayerDisplayMode> = computed(
    () => {
      const currentRoundConfig = this.roundConfig();
      if (currentRoundConfig !== null) {
        if (currentRoundConfig.type === RoundType.ROLES) {
          return PlayerDisplayMode.EDIT_ROLE;
        } else if (currentRoundConfig.maxSelectable > 1) {
          return PlayerDisplayMode.SELECT_MULTI;
        } else if (currentRoundConfig.maxSelectable === 1) {
          return PlayerDisplayMode.SELECT_SINGLE;
        } else {
          return PlayerDisplayMode.DEFAULT;
        }
      } else {
        return PlayerDisplayMode.DEFAULT;
      }
    },
  );

  protected readonly selectedPlayer: WritableSignal<number | undefined> =
    signal(undefined);
  protected readonly selectedPlayers = computed<Set<number>>(() => {
    const selection =
      this.playersMultiSelectionChange()?.source?.selected ?? [];
    return new Set(selection);
  });
  protected readonly selectedRole: WritableSignal<PlayerRole | undefined> =
    signal(undefined);

  private readonly playersMultiSelection = new SelectionModel<number>(true);
  private readonly playersMultiSelectionChange = toSignal(
    this.playersMultiSelection.changed,
  );

  protected readonly submitDisabled: Signal<boolean> = computed(() => {
    switch (this.playerDisplayMode()) {
      case PlayerDisplayMode.SELECT_SINGLE:
        return (
          (this.roundConfig()?.minSelectable ?? 0) > 0 &&
          this.selectedPlayer() === undefined
        );
      case PlayerDisplayMode.SELECT_MULTI:
        return (
          this.selectedPlayers().size >
            (this.roundConfig()?.maxSelectable ?? 0) ||
          this.selectedPlayers().size < (this.roundConfig()?.minSelectable ?? 0)
        );
      case PlayerDisplayMode.EDIT_ROLE:
        return (
          (this.roundConfig()?.minSelectable ?? 0) > 0 &&
          this.selectedRole() === undefined
        );
      default:
        return false;
    }
  });

  protected readonly displayEqualityButton: Signal<boolean> = computed(
    () =>
      this.players().some(
        (player) => player.role === PlayerRole.BOUC && !player.isDead,
      ) && this.roundConfig()?.round === Round.VILLAGEOIS,
  );

  protected readonly isBeforeGame: Signal<boolean> = computed(
    () => this.roundConfig()?.round === Round.SECTAIRE,
  );

  protected readonly PlayerDisplayModeEnum = PlayerDisplayMode;

  protected onPlayerChecked(id: number, checked: boolean): void {
    if (this.playerDisplayMode() === PlayerDisplayMode.SELECT_MULTI) {
      this.playersMultiSelection.toggle(id);
    } else {
      this.selectedPlayer.set(checked ? id : undefined);
    }
  }

  protected onRoleSelect(role: PlayerRole): void {
    this.selectedRole.set(role);
  }

  protected onSubmit(): void {
    const selectedPlayers =
      this.selectedPlayer() !== undefined
        ? [this.selectedPlayer() as number]
        : Array.from(this.selectedPlayers());
    this.gameOrchestrator.submitRoundAction(
      selectedPlayers,
      this.selectedRole(),
    );
    this.cleanSelection();
  }

  protected onEquality(): void {
    this.gameOrchestrator.submitRoundAction([], undefined, true);
    this.cleanSelection();
  }

  private cleanSelection(): void {
    this.selectedPlayer.set(undefined);
    this.playersMultiSelection.clear();
    this.selectedRole.set(undefined);
  }
}
