import { Component } from '@angular/core';
import { RadioGroupCustomEvent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PlayerDisplayModeEnum } from '../enums/player-display-mode.enum';
import { Player } from '../models/player.model';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'lgmj-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  protected players$: Observable<Player[]>;

  playerDisplayMode = PlayerDisplayModeEnum.SELECT_SINGLE;

  private selectedPlayer?: number;

  constructor(private gameService: GameService) {
    this.players$ = this.gameService.getPlayers();
  }

  protected onSinglePlayerChecked(event: Event) {
    this.selectedPlayer = (event as RadioGroupCustomEvent).detail.value;
  }

  protected wolfAttack(): void {
    if (this.selectedPlayer !== undefined) {
      this.gameService.testWolfAttack(this.selectedPlayer);
    }
  }

  protected health(): void {
    if (this.selectedPlayer !== undefined) {
      this.gameService.testHealthPotion(this.selectedPlayer);
    }
  }
}
