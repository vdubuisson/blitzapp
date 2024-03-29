import {
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonList,
  IonNote,
  IonRadioGroup,
  IonText,
  RadioGroupCustomEvent,
} from '@ionic/angular/standalone';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { Player } from '../../core/models/player.model';
import { Round } from '../../core/models/round.model';
import { GameService } from '../../core/services/game/game.service';
import { RoundNamePipe } from '../../core/pipes/round-name/round-name.pipe';
import { PlayerComponent } from '../../core/components/player/player.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { PLAYER_TRACK_BY } from '../../core/utils/player.track-by';
import { RoundTypeEnum } from '../../core/enums/round-type.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { RoundEnum } from '../../core/enums/round.enum';

@Component({
  selector: 'lgmj-game',
  standalone: true,
  imports: [
    CommonModule,
    RoundNamePipe,
    PlayerComponent,
    HeaderComponent,
    IonContent,
    IonNote,
    IonText,
    IonList,
    IonRadioGroup,
    IonButton,
  ],
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

  protected playerTrackBy = PLAYER_TRACK_BY;

  protected selectedPlayer: WritableSignal<number | undefined> =
    signal(undefined);
  protected selectedPlayers: WritableSignal<Set<number>> = signal(
    new Set<number>(),
  );
  protected selectedRole: WritableSignal<PlayerRoleEnum | undefined> =
    signal(undefined);

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

  protected onSinglePlayerChecked(event: Event) {
    if (this.playerDisplayMode() === PlayerDisplayModeEnum.SELECT_SINGLE) {
      this.selectedPlayer.set((event as RadioGroupCustomEvent).detail.value);
    }
  }

  protected onMultiPlayerChecked(id: number, checked: boolean): void {
    if (this.playerDisplayMode() === PlayerDisplayModeEnum.SELECT_MULTI) {
      this.selectedPlayers.update((previousPlayers) => {
        const newPlayers = new Set(previousPlayers);
        if (checked) {
          newPlayers.add(id);
        } else {
          newPlayers.delete(id);
        }
        return newPlayers;
      });
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
    this.selectedPlayers.set(new Set());
    this.selectedRole.set(undefined);
  }
}
