import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
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
    const sorciere = players.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE
    );
    if (sorciere) {
      sorciere.statuses.push(
        PlayerStatusEnum.HEALTH_POTION,
        PlayerStatusEnum.DEATH_POTION
      );
    }
    this.players = players;
    this.router.navigate(['game']);
  }
}
