import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { GameService } from '@/services/game/game.service';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewGameService {
  private readonly gameService = inject(GameService);
  private readonly router = inject(Router);
  private readonly currentGamePlayers =
    inject(CurrentPlayersStore).state.asReadonly();

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

  /**
   * Adds a new player to the game.
   * @param name - The name of the player to be added.
   */
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

  /** Removes a player from the game.
   * @param id - The id of the player to be removed.
   */
  removePlayer(id: number): void {
    const currentPlayers = this.players();
    currentPlayers.splice(id, 1);
    const newPlayers = this.reindexPlayers(currentPlayers);
    this.players.set(newPlayers);
  }

  /**
   * Reorders players in the game.
   * @param from - The index of the player to be moved.
   * @param to - The new index for the player.
   */
  reorderPlayers(from: number, to: number): void {
    const currentPlayers = this.players();
    const movedPlayer = currentPlayers.splice(from, 1)[0];
    currentPlayers.splice(to, 0, movedPlayer);
    const newPlayers = this.reindexPlayers(currentPlayers);
    this.players.set(newPlayers);
  }

  /**
   * Configure a new game with the players from the previous game.
   */
  replay(): void {
    const players = this.currentGamePlayers();

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

  /**
   * Sets the role of a player.
   * @param id - The id of the player whose role is to be set.
   * @param role - The role to be assigned to the player.
   */
  changeRole(id: number, role: PlayerRoleEnum): void {
    const currentPlayers = [...this.players()];
    const playerIndex = currentPlayers.findIndex((player) => player.id === id);
    if (playerIndex > -1) {
      const player = { ...currentPlayers[playerIndex], role, card: role };
      currentPlayers[playerIndex] = player;
      this.players.set(currentPlayers);
    }
  }

  /**
   * Starts a new game with the current players.
   */
  createGame(): void {
    this.gameService.createGame(this.players());
    this.players.set([]);
  }

  private reindexPlayers(players: Player[]): Player[] {
    return [...players].map((player, index) => ({ ...player, id: index }));
  }
}
