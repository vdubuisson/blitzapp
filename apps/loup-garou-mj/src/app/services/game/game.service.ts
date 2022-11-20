import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private players: Player[] = [];

  constructor(private router: Router) {}

  getPlayers(): Player[] {
    return this.players;
  }

  createGame(players: Player[]): void {
    this.players = players;
    this.router.navigate(['game']);
  }
}
