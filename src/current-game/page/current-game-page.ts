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
import {
  PlayerDisplayMode,
  PlayerDisplayModeEnum,
} from '@/shared/components/player-card/player-display-mode';
import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
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
        if (currentRoundConfig.type === RoundTypeEnum.ROLES) {
          return PlayerDisplayModeEnum.EDIT_ROLE;
        } else if (currentRoundConfig.maxSelectable > 1) {
          return PlayerDisplayModeEnum.SELECT_MULTI;
        } else if (currentRoundConfig.maxSelectable === 1) {
          return PlayerDisplayModeEnum.SELECT_SINGLE;
        } else {
          return PlayerDisplayModeEnum.DEFAULT;
        }
      } else {
        return PlayerDisplayModeEnum.DEFAULT;
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
      case PlayerDisplayModeEnum.SELECT_SINGLE:
        return (
          (this.roundConfig()?.minSelectable ?? 0) > 0 &&
          this.selectedPlayer() === undefined
        );
      case PlayerDisplayModeEnum.SELECT_MULTI:
        return (
          this.selectedPlayers().size >
            (this.roundConfig()?.maxSelectable ?? 0) ||
          this.selectedPlayers().size < (this.roundConfig()?.minSelectable ?? 0)
        );
      case PlayerDisplayModeEnum.EDIT_ROLE:
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
        (player) => player.role === PlayerRoleEnum.BOUC && !player.isDead,
      ) && this.roundConfig()?.round === RoundEnum.VILLAGEOIS,
  );

  protected readonly isBeforeGame: Signal<boolean> = computed(
    () => this.roundConfig()?.round === RoundEnum.SECTAIRE,
  );

  protected onPlayerChecked(id: number, checked: boolean): void {
    if (this.playerDisplayMode() === PlayerDisplayModeEnum.SELECT_MULTI) {
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
