import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private players = new BehaviorSubject<Player[]>([]);

  constructor(
    private router: Router,
    private roundHandlersService: RoundHandlersService
  ) {}

  getPlayers(): Observable<Player[]> {
    return this.players.asObservable();
  }

  createGame(players: Player[]): void {
    this.roundHandlersService.initHandlers(
      players.map((player) => player.role)
    );
    const sorciere = players.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE
    );
    if (sorciere) {
      sorciere.statuses.add(PlayerStatusEnum.HEALTH_POTION);
      sorciere.statuses.add(PlayerStatusEnum.DEATH_POTION);
    }
    this.players.next(players);
    this.router.navigate(['game']);
  }

  testWolfAttack(playerId: number): void {
    const handler = this.roundHandlersService.getHandler(RoundEnum.LOUP_GAROU);
    if (handler) {
      this.players.next(handler.handleAction(this.players.value, [playerId]));
    }
  }

  testHealthPotion(playerId: number): void {
    const handler = this.roundHandlersService.getHandler(
      RoundEnum.SORCIERE_HEALTH
    );
    if (handler) {
      this.players.next(handler.handleAction(this.players.value, [playerId]));
    }
  }
}
