import { Component } from '@angular/core';
import { ItemReorderCustomEvent } from '@ionic/angular';
import { PlayerDisplayModeEnum } from '../enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'lgmj-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})
export class NewGamePage {
  protected players: Player[] = [];

  protected playerDisplayMode = PlayerDisplayModeEnum.REMOVE;

  constructor(private gameService: GameService) {}

  protected createGame(): void {
    this.gameService.createGame(this.players);
  }

  protected addPlayer({
    name,
    role,
  }: {
    name: string;
    role: PlayerRoleEnum;
  }): void {
    this.players.push({
      id: this.players.length,
      name,
      role,
      statuses: [],
      isDead: false,
    });
  }

  protected removePlayer(id: number): void {
    this.players.splice(id, 1);
    this.reindexPlayers();
  }

  protected reorderPlayer(event: Event): void {
    this.players = (event as ItemReorderCustomEvent).detail.complete(
      this.players
    );
    this.reindexPlayers();
  }

  private reindexPlayers(): void {
    this.players.forEach((player, index) => (player.id = index));
  }
}
