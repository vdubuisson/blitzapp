import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { GameService } from '../game/game.service';

@Injectable({
  providedIn: 'root',
})
export class NewGameService {
  private players = new BehaviorSubject<Player[]>([
    // {
    //   id: 0,
    //   name: 'Valentin',
    //   role: PlayerRoleEnum.VILLAGEOIS,
    // card: PlayerRoleEnum.VILLAGEOIS,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 1,
    //   name: 'Jean-Baptiste',
    //   role: PlayerRoleEnum.LOUP_GAROU,
    // card: PlayerRoleEnum.LOUP_GAROU,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 2,
    //   name: 'Davy',
    //   role: PlayerRoleEnum.SORCIERE,
    // card: PlayerRoleEnum.SORCIERE,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 3,
    //   name: 'Romain',
    //   role: PlayerRoleEnum.VILLAGEOIS,
    // card: PlayerRoleEnum.VILLAGEOIS,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 4,
    //   name: 'Anne-Lise',
    //   role: PlayerRoleEnum.CHASSEUR,
    // card: PlayerRoleEnum.CHASSEUR,
    //   statuses: new Set(),
    //   isDead: false,
    // },
  ]);

  constructor(private gameService: GameService, private router: Router) {}

  getPlayers(): Observable<Player[]> {
    return this.players.asObservable();
  }

  addPlayer(name: string): void {
    const currentPlayers = this.players.value;
    const newPlayer: Player = {
      id: currentPlayers.length,
      name,
      role: PlayerRoleEnum.NOT_SELECTED,
card: PlayerRoleEnum.NOT_SELECTED,
      statuses: new Set<PlayerStatusEnum>(),
      isDead: false,
    };
    this.players.next([...currentPlayers, newPlayer]);
  }

  removePlayer(id: number): void {
    const currentPlayers = this.players.value;
    currentPlayers.splice(id, 1);
    const newPlayers = this.reindexPlayers(currentPlayers);
    this.players.next(newPlayers);
  }

  reorderPlayers(from: number, to: number): void {
    const currentPlayers = this.players.value;
    const movedPlayer = currentPlayers.splice(from, 1)[0];
    currentPlayers.splice(to, 0, movedPlayer);
    const newPlayers = this.reindexPlayers(currentPlayers);
    this.players.next(newPlayers);
  }

  replay(): void {
    this.gameService
      .getPlayers()
      .pipe(
        take(1),
        map((players) =>
          players.map((player) => ({
            ...player,
            role: PlayerRoleEnum.NOT_SELECTED,
            card: PlayerRoleEnum.NOT_SELECTED,
            statuses: new Set<PlayerStatusEnum>(),
            isDead: false,
          }))
        )
      )
      .subscribe((players) => {
        this.players.next(players);
        this.router.navigate(['roles-choice']);
      });
  }

  changeRole(id: number, role: PlayerRoleEnum): void {
    const currentPlayers = this.players.value;
    const player = currentPlayers.find((player) => player.id === id);
    if (player !== undefined) {
      player.role = role;
      player.card = role;
      this.players.next(currentPlayers);
    }
  }

  createGame(): void {
    this.gameService.createGame(this.players.value);
    this.players.next([]);
  }

  private reindexPlayers(players: Player[]): Player[] {
    return [...players].map((player, index) => ({ ...player, id: index }));
  }
}
