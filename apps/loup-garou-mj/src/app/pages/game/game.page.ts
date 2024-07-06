import { SelectionModel } from '@angular/cdk/collections';

import {
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlayerComponent } from '../../core/components/player/player.component';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { RoundTypeEnum } from '../../core/enums/round-type.enum';
import { RoundEnum } from '../../core/enums/round.enum';
import { Player } from '../../core/models/player.model';
import { Round } from '../../core/models/round.model';
import { RoundNamePipe } from '../../core/pipes/round-name/round-name.pipe';
import { GameService } from '../../core/services/game/game.service';

@Component({
  selector: 'lgmj-game',
  standalone: true,
  imports: [RoundNamePipe, PlayerComponent],
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  protected players: Signal<Player[]> = computed(() =>
    this.gameService.currentPlayers().map((player) => ({ ...player })),
  );
  protected round: Signal<Round | undefined> = this.gameService.currentRound;
  protected dayCount: Signal<number> = this.gameService.currentDayCount;

  protected playerDisplayMode: Signal<PlayerDisplayModeEnum> = computed(() => {
    if (this.round() !== undefined) {
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

  protected PlayerDisplayModeEnum = PlayerDisplayModeEnum;

  protected selectedPlayer: WritableSignal<number | undefined> =
    signal(undefined);
  protected selectedPlayers = computed<Set<number>>(() => {
    const selection =
      this.playersMultiSelectionChange()?.source?.selected ?? [];
    return new Set(selection);
  });
  protected selectedRole: WritableSignal<PlayerRoleEnum | undefined> =
    signal(undefined);

  private playersMultiSelection = new SelectionModel<number>(true);
  private playersMultiSelectionChange = toSignal(
    this.playersMultiSelection.changed,
  );

  protected submitDisabled: Signal<boolean> = computed(() => {
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

  protected displayEqualityButton: Signal<boolean> = computed(
    () =>
      this.players().some(
        (player) => player.role === PlayerRoleEnum.BOUC && !player.isDead,
      ) && this.round()?.role === RoundEnum.VILLAGEOIS,
  );

  protected isBeforeGame: Signal<boolean> = computed(
    () => this.round()?.role === RoundEnum.SECTAIRE,
  );

  constructor(private gameService: GameService) {}

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
