import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, RadioGroupCustomEvent } from '@ionic/angular';
import { Observable, tap } from 'rxjs';
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

@Component({
  selector: 'lgmj-game',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RoundNamePipe,
    PlayerComponent,
    HeaderComponent,
  ],
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  protected players$: Observable<Player[]>;
  protected round$: Observable<Round | undefined>;
  protected dayCount$: Observable<number>;

  protected playerDisplayMode: PlayerDisplayModeEnum =
    PlayerDisplayModeEnum.DEFAULT;
  protected PlayerDisplayModeEnum = PlayerDisplayModeEnum;

  protected playerTrackBy = PLAYER_TRACK_BY;

  protected selectedPlayer?: number;
  protected selectedPlayers = new Set<number>();
  protected selectedRole?: PlayerRoleEnum;

  private maxSelectable = 0;
  private minSelectable = 0;

  protected get submitDisabled(): boolean {
    switch (this.playerDisplayMode) {
      case PlayerDisplayModeEnum.SELECT_SINGLE:
        return this.minSelectable > 0 && this.selectedPlayer === undefined;
      case PlayerDisplayModeEnum.SELECT_MULTI:
        return (
          this.selectedPlayers.size > this.maxSelectable ||
          this.selectedPlayers.size < this.minSelectable
        );
      case PlayerDisplayModeEnum.EDIT_ROLE:
        return this.minSelectable > 0 && this.selectedRole === undefined;
      default:
        return false;
    }
  }

  constructor(private gameService: GameService) {
    this.round$ = this.gameService.getRound().pipe(
      tap((round) => {
        if (round !== undefined) {
          this.maxSelectable = round.maxSelectable;
          this.minSelectable = round.minSelectable;
          if (round.type === RoundTypeEnum.ROLES) {
            this.playerDisplayMode = PlayerDisplayModeEnum.EDIT_ROLE;
          } else if (round.maxSelectable > 1) {
            this.playerDisplayMode = PlayerDisplayModeEnum.SELECT_MULTI;
          } else if (round.maxSelectable === 1) {
            this.playerDisplayMode = PlayerDisplayModeEnum.SELECT_SINGLE;
          } else {
            this.playerDisplayMode = PlayerDisplayModeEnum.DEFAULT;
          }
        }
      })
    );
    this.players$ = this.gameService.getPlayers();
    this.dayCount$ = this.gameService.getDayCount();
  }

  protected onSinglePlayerChecked(event: Event) {
    if (this.playerDisplayMode === PlayerDisplayModeEnum.SELECT_SINGLE) {
      this.selectedPlayer = (event as RadioGroupCustomEvent).detail.value;
    }
  }

  protected onMultiPlayerChecked(id: number, checked: boolean): void {
    if (this.playerDisplayMode === PlayerDisplayModeEnum.SELECT_MULTI) {
      if (checked) {
        this.selectedPlayers.add(id);
      } else {
        this.selectedPlayers.delete(id);
      }
    }
  }

  protected onRoleSelect(role: PlayerRoleEnum): void {
    this.selectedRole = role;
  }

  protected onSubmit(): void {
    const selectedPlayers =
      this.selectedPlayer !== undefined
        ? [this.selectedPlayer]
        : Array.from(this.selectedPlayers);
    this.gameService.submitRoundAction(selectedPlayers, this.selectedRole);
    this.selectedPlayer = undefined;
    this.selectedPlayers.clear();
    this.selectedRole = undefined;
  }
}
