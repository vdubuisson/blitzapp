import { Component } from '@angular/core';
import { ItemReorderCustomEvent } from '@ionic/angular';
import { PlayerDisplayModeEnum } from '../core/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../core/enums/player-role.enum';
import { Player } from '../core/models/player.model';
import { GameService } from '../core/services/game/game.service';
import { NON_UNIQUE_ROLES } from './constants/non-unique-roles';

@Component({
  selector: 'lgmj-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})
export class NewGamePage {
  protected players: Player[] = [
    // {
    //   id: 0,
    //   name: 'Valentin',
    //   role: PlayerRoleEnum.VILLAGEOIS,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 1,
    //   name: 'Jean-Baptiste',
    //   role: PlayerRoleEnum.LOUP_GAROU,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 2,
    //   name: 'Davy',
    //   role: PlayerRoleEnum.SORCIERE,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 3,
    //   name: 'Romain',
    //   role: PlayerRoleEnum.VILLAGEOIS,
    //   statuses: new Set(),
    //   isDead: false,
    // },
    // {
    //   id: 4,
    //   name: 'Anne-Lise',
    //   role: PlayerRoleEnum.CHASSEUR,
    //   statuses: new Set(),
    //   isDead: false,
    // },
  ];

  protected playerDisplayMode = PlayerDisplayModeEnum.REMOVE;

  protected availableRoles: PlayerRoleEnum[] = Object.values(PlayerRoleEnum)
    // TODO Handle VOLEUR role
    .filter((role) => role !== PlayerRoleEnum.VOLEUR);

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
    if (!NON_UNIQUE_ROLES.includes(role)) {
      this.availableRoles = this.availableRoles.filter((r) => r !== role);
    }
    this.players.push({
      id: this.players.length,
      name,
      role,
      statuses: new Set(),
      isDead: false,
    });
  }

  protected removePlayer(id: number): void {
    const removedPlayer = this.players.splice(id, 1)[0];
    this.reindexPlayers();
    if (!NON_UNIQUE_ROLES.includes(removedPlayer.role)) {
      this.availableRoles = [...this.availableRoles, removedPlayer.role];
    }
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
