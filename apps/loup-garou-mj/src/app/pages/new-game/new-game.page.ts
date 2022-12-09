import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ItemReorderCustomEvent } from '@ionic/angular';
import { NON_UNIQUE_ROLES } from '../../core/constants/non-unique-roles';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { GameService } from '../../core/services/game/game.service';
import { NewPlayerComponent } from '../../core/components/new-player/new-player.component';
import { PlayerComponent } from '../../core/components/player/player.component';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'lgmj-new-game',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    NewPlayerComponent,
    PlayerComponent,
    HeaderComponent,
  ],
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

  protected playerDisplayMode = PlayerDisplayModeEnum.CREATE;
  protected playerDisplayModeEnum = PlayerDisplayModeEnum;

  protected pageSubtitle = 'Joueurs';

  protected availableRoles: PlayerRoleEnum[] = this.getAvailableRoles();

  protected get cannotCreate(): boolean {
    return this.players.some(
      (player) => player.role === PlayerRoleEnum.NOT_SELECTED
    );
  }

  constructor(private gameService: GameService) {}

  protected validatePlayers(): void {
    this.playerDisplayMode = PlayerDisplayModeEnum.EDIT_ROLE;
    this.pageSubtitle = 'Rôles';
  }

  protected createGame(): void {
    this.gameService.createGame(this.players);
  }

  protected backToCreation(): void {
    this.playerDisplayMode = PlayerDisplayModeEnum.CREATE;
    this.pageSubtitle = 'Joueurs';
  }

  protected addPlayer(name: string): void {
    this.players.push({
      id: this.players.length,
      name,
      role: PlayerRoleEnum.NOT_SELECTED,
      statuses: new Set(),
      isDead: false,
    });
  }

  protected removePlayer(id: number): void {
    this.players.splice(id, 1);
    this.reindexPlayers();
    this.availableRoles = this.getAvailableRoles();
  }

  protected reorderPlayer(event: Event): void {
    this.players = (event as ItemReorderCustomEvent).detail.complete(
      this.players
    );
    this.reindexPlayers();
  }

  protected changeRole(id: number, role: PlayerRoleEnum): void {
    const player = this.players.find((player) => player.id === id);
    if (player !== undefined) {
      player.role = role;
      this.availableRoles = this.getAvailableRoles();
    }
  }

  private reindexPlayers(): void {
    this.players.forEach((player, index) => (player.id = index));
  }

  private getAvailableRoles(): PlayerRoleEnum[] {
    const usedRoles = new Set(this.players.map((player) => player.role));
    return (
      Object.values(PlayerRoleEnum)
        .filter(
          (role) =>
            role !== PlayerRoleEnum.NOT_SELECTED &&
            (NON_UNIQUE_ROLES.includes(role) || !usedRoles.has(role))
        )
        // TODO Handle VOLEUR role
        .filter((role) => role !== PlayerRoleEnum.VOLEUR)
    );
  }
}
