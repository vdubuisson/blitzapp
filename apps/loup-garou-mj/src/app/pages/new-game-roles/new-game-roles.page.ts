import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NON_UNIQUE_ROLES } from '../../core/configs/non-unique-roles';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { PlayerComponent } from '../../core/components/player/player.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { PLAYER_TRACK_BY } from '../../core/utils/player.track-by';
import { switchMap, tap } from 'rxjs/operators';
import { NewGameService } from '../../core/services/new-game/new-game.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { RoleChoiceService } from '../../core/services/role-choice/role-choice.service';
import { RoleList } from '../../core/models/role-list.model';

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

  private rolesToPlay: RoleList = {
    selectedRoles: new Set(),
    villageois: 0,
    loupGarou: 0,
    playersNumber: 0,
  };

  constructor(
    private newGameService: NewGameService,
    private roleChoiceService: RoleChoiceService
  ) {
    this.players$ = this.roleChoiceService.getCurrentChosenRoles().pipe(
      tap((selectedRoles) => (this.rolesToPlay = selectedRoles)),
      switchMap(() => this.newGameService.getPlayers()),
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
    let availableRoles = Array.from(this.rolesToPlay.selectedRoles).filter(
      (role) => NON_UNIQUE_ROLES.includes(role) || !usedRoles.has(role)
    );

    if (
      this.rolesToPlay.villageois >
      players.filter((player) => player.role === PlayerRoleEnum.VILLAGEOIS)
        .length
    ) {
      availableRoles.push(PlayerRoleEnum.VILLAGEOIS);
    }

    if (
      this.rolesToPlay.loupGarou >
      players.filter((player) => player.role === PlayerRoleEnum.LOUP_GAROU)
        .length
    ) {
      availableRoles.push(PlayerRoleEnum.LOUP_GAROU);
    }

    if (
      usedRoles.has(PlayerRoleEnum.SOEUR) &&
      players.filter((player) => player.role === PlayerRoleEnum.SOEUR)
        .length === 2
    ) {
      availableRoles = availableRoles.filter(
        (role) => role !== PlayerRoleEnum.SOEUR
      );
    }

    if (
      usedRoles.has(PlayerRoleEnum.FRERE) &&
      players.filter((player) => player.role === PlayerRoleEnum.FRERE)
        .length === 3
    ) {
      availableRoles = availableRoles.filter(
        (role) => role !== PlayerRoleEnum.FRERE
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
    if (
      canCreate &&
      players.some((player) => player.role === PlayerRoleEnum.FRERE)
    ) {
      canCreate =
        players.filter((player) => player.role === PlayerRoleEnum.FRERE)
          .length === 3;
    }
    return canCreate;
  }
}
