import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NON_UNIQUE_ROLES } from '../../core/constants/non-unique-roles';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { PlayerComponent } from '../../core/components/player/player.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { PLAYER_TRACK_BY } from '../../core/utils/player.track-by';
import { tap } from 'rxjs/operators';
import { NewGameService } from '../../core/services/new-game/new-game.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lgmj-new-game-roles',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    PlayerComponent,
    HeaderComponent,
  ],
  templateUrl: './new-game-roles.page.html',
  styleUrls: ['./new-game-roles.page.scss'],
})
export class NewGameRolesPage {
  protected players$: Observable<Player[]>;

  protected playerDisplayMode = PlayerDisplayModeEnum.EDIT_ROLE;

  protected playerTrackBy = PLAYER_TRACK_BY;

  protected cannotCreate = true;

  protected availableRoles: PlayerRoleEnum[] = [];

  constructor(private newGameService: NewGameService) {
    this.players$ = this.newGameService.getPlayers().pipe(
      tap((players) => {
        this.cannotCreate = !this.canCreateGame(players);
        this.availableRoles = this.getAvailableRoles(players);
      })
    );
  }

  protected changeRole(id: number, role: PlayerRoleEnum): void {
    this.newGameService.changeRole(id, role);
  }

  protected createGame(): void {
    this.newGameService.createGame();
  }

  private getAvailableRoles(players: Player[]): PlayerRoleEnum[] {
    const usedRoles = new Set(players.map((player) => player.role));
    let availableRoles = Object.values(PlayerRoleEnum)
      .filter(
        (role) =>
          role !== PlayerRoleEnum.NOT_SELECTED &&
          (NON_UNIQUE_ROLES.includes(role) || !usedRoles.has(role))
      )
      // TODO Handle VOLEUR role
      .filter((role) => role !== PlayerRoleEnum.VOLEUR);

    if (
      usedRoles.has(PlayerRoleEnum.SOEUR) &&
      players.filter((player) => player.role === PlayerRoleEnum.SOEUR)
        .length === 2
    ) {
      availableRoles = availableRoles.filter(
        (role) => role !== PlayerRoleEnum.SOEUR
      );
    }

    return availableRoles;
  }

  private canCreateGame(players: Player[]): boolean {
    let canCreate = players.every(
      (player) => player.role !== PlayerRoleEnum.NOT_SELECTED
    );
    if (
      canCreate &&
      players.some((player) => player.role === PlayerRoleEnum.SOEUR)
    ) {
      canCreate =
        players.filter((player) => player.role === PlayerRoleEnum.SOEUR)
          .length === 2;
    }
    return canCreate;
  }
}
