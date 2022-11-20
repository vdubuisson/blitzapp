import { Component } from '@angular/core';
import { Player } from '../models/player.model';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'lgmj-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  protected players: Player[];

  constructor(private gameService: GameService) {
    this.players = this.gameService.getPlayers();
  }
}
