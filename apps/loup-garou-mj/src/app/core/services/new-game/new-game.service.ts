import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { GameService } from '../game/game.service';
import { CardChoiceService } from '../card-choice/card-choice.service';

@Injectable({
  providedIn: 'root',
})
export class NewGameService {
  private players: WritableSignal<Player[]> = signal([
    // {
    //   id: 0,
    //   name: 'Valentin',
    //   role: PlayerRoleEnum.VILLAGEOIS,
    //   card: PlayerRoleEnum.VILLAGEOIS,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 1,
    //   name: 'Jean-Baptiste',
    //   role: PlayerRoleEnum.LOUP_GAROU,
    //   card: PlayerRoleEnum.LOUP_GAROU,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 2,
    //   name: 'Davy',
    //   role: PlayerRoleEnum.SORCIERE,
    //   card: PlayerRoleEnum.SORCIERE,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 3,
    //   name: 'Romain',
    //   role: PlayerRoleEnum.VILLAGEOIS,
    //   card: PlayerRoleEnum.VILLAGEOIS,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 4,
    //   name: 'Anne-Lise',
    //   role: PlayerRoleEnum.NOT_SELECTED,
    //   card: PlayerRoleEnum.NOT_SELECTED,
    //   statuses: new Set(),
    //   isDead: false,
    // },
  ]);

  constructor(
    private gameService: GameService,
    private router: Router,
    private cardChoiceService: CardChoiceService,
  ) {}

  get currentPlayers(): Signal<Player[]> {
    return this.players.asReadonly();
  }

  addPlayer(name: string): void {
    const currentPlayers = this.players();
    const newPlayer: Player = {
      id: currentPlayers.length,
      name,
      role: PlayerRoleEnum.NOT_SELECTED,
      card: PlayerRoleEnum.NOT_SELECTED,
      statuses: new Set<PlayerStatusEnum>(),
      isDead: false,
    };
    this.players.set([...currentPlayers, newPlayer]);
  }

  removePlayer(id: number): void {
    const currentPlayers = this.players();
    currentPlayers.splice(id, 1);
    const newPlayers = this.reindexPlayers(currentPlayers);
    this.players.set(newPlayers);
  }

  reorderPlayers(from: number, to: number): void {
    const currentPlayers = this.players();
    const movedPlayer = currentPlayers.splice(from, 1)[0];
    currentPlayers.splice(to, 0, movedPlayer);
    const newPlayers = this.reindexPlayers(currentPlayers);
    this.players.set(newPlayers);
  }

  replay(): void {
    const players = this.gameService.currentPlayers();

    const newPlayers = [...players].map((player) => ({
      ...player,
      role: PlayerRoleEnum.NOT_SELECTED,
      card: PlayerRoleEnum.NOT_SELECTED,
      statuses: new Set<PlayerStatusEnum>(),
      isDead: false,
    }));

    this.players.set(newPlayers);
    this.router.navigate(['roles-choice']);
  }

  changeRole(id: number, role: PlayerRoleEnum): void {
    const currentPlayers = [...this.players()];
    const playerIndex = currentPlayers.findIndex((player) => player.id === id);
    if (playerIndex > -1) {
      const player = { ...currentPlayers[playerIndex], role, card: role };
      currentPlayers[playerIndex] = player;
      this.players.set(currentPlayers);
    }
  }

  createGame(): void {
    const cardList = this.cardChoiceService.currentChosenCards();
    this.gameService.createGame(this.players(), cardList);
    this.players.set([]);
  }

  private reindexPlayers(players: Player[]): Player[] {
    return [...players].map((player, index) => ({ ...player, id: index }));
  }
}
