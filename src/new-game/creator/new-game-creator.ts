import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewGameCreator {
  private readonly gameOrchestrator = inject(GameOrchestrator);
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
      role: PlayerRole.NOT_SELECTED,
      card: PlayerRole.NOT_SELECTED,
      statuses: new Set<PlayerStatus>(),
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
      role: PlayerRole.NOT_SELECTED,
      card: PlayerRole.NOT_SELECTED,
      statuses: new Set<PlayerStatus>(),
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
  changeRole(id: number, role: PlayerRole): void {
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
    this.gameOrchestrator.createGame(this.players());
    this.players.set([]);
  }

  private reindexPlayers(players: Player[]): Player[] {
    return [...players].map((player, index) => ({ ...player, id: index }));
  }
}
