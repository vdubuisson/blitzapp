import { Component } from '@angular/core';
import { RadioGroupCustomEvent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PlayerDisplayModeEnum } from '../enums/player-display-mode.enum';
import { Player } from '../models/player.model';
import { Round } from '../models/round.model';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'lgmj-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  protected players$: Observable<Player[]>;
  protected round$: Observable<Round | undefined>;

  protected playerDisplayModeEnum = PlayerDisplayModeEnum;

  selectedPlayer?: number;

  constructor(private gameService: GameService) {
    this.round$ = this.gameService.getRound();
    this.players$ = this.gameService.getPlayers();
  }

  protected onSinglePlayerChecked(event: Event) {
    this.selectedPlayer = (event as RadioGroupCustomEvent).detail.value;
  }

  protected onSubmit(): void {
    const selectedPlayers =
      this.selectedPlayer !== undefined ? [this.selectedPlayer] : [];
    this.gameService.submitRoundAction(selectedPlayers);
    this.selectedPlayer = undefined;
  }
}
