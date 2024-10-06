import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { CardChoiceService } from '@/services/card-choice/card-choice.service';
import { GameService } from '@/services/game/game.service';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewGameService {
  private readonly gameService = inject(GameService);
  private readonly router = inject(Router);
  private readonly cardChoiceService = inject(CardChoiceService);

  private readonly players: WritableSignal<Player[]> = signal([
    // {
    //   id: 0,
    //   name: 'Valentin',
    //   role: PlayerRoleEnum.NOT_SELECTED,
    //   card: PlayerRoleEnum.NOT_SELECTED,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 1,
    //   name: 'Jean-Baptiste',
    //   role: PlayerRoleEnum.NOT_SELECTED,
    //   card: PlayerRoleEnum.NOT_SELECTED,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 2,
    //   name: 'Davy',
    //   role: PlayerRoleEnum.NOT_SELECTED,
    //   card: PlayerRoleEnum.NOT_SELECTED,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 3,
    //   name: 'Romain',
    //   role: PlayerRoleEnum.NOT_SELECTED,
    //   card: PlayerRoleEnum.NOT_SELECTED,
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

  readonly currentPlayers = this.players.asReadonly();

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
