import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NON_UNIQUE_ROLES } from '../../core/configs/non-unique-roles';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { PlayerComponent } from '../../core/components/player/player.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { PLAYER_TRACK_BY } from '../../core/utils/player.track-by';
import { NewGameService } from '../../core/services/new-game/new-game.service';
import { RouterLink } from '@angular/router';
import { CardChoiceService } from '../../core/services/card-choice/card-choice.service';
import { CardList } from '../../core/models/card-list.model';
import {
  IonButton,
  IonContent,
  IonList,
  IonRouterLink,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-new-game-roles',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PlayerComponent,
    HeaderComponent,
    IonRouterLink,
    IonContent,
    IonList,
    IonButton,
  ],
  templateUrl: './new-game-roles.page.html',
  styleUrls: ['./new-game-roles.page.scss'],
})
export class NewGameRolesPage {
  protected players: Signal<Player[]> = this.newGameService.currentPlayers;

  protected playerDisplayMode = PlayerDisplayModeEnum.EDIT_ROLE;

  protected playerTrackBy = PLAYER_TRACK_BY;

  protected canCreate: Signal<boolean> = computed(() =>
    this.canCreateGame(this.players()),
  );

  protected availableRoles: Signal<PlayerRoleEnum[]> = computed(() =>
    this.getAvailableRoles(this.players()),
  );

  constructor(
    private newGameService: NewGameService,
    private cardChoiceService: CardChoiceService,
  ) {}

  protected changeRole(id: number, role: PlayerRoleEnum): void {
    this.newGameService.changeRole(id, role);
    if (this.availableRoles().length === 1) {
      this.affectLastRoleToPlayers();
    }
  }

  protected createGame(): void {
    this.newGameService.createGame();
  }

  private getAvailableRoles(players: Player[]): PlayerRoleEnum[] {
    const cardsToPlay: Signal<CardList> =
      this.cardChoiceService.currentChosenCards;
    const usedRoles = new Set(players.map((player) => player.role));
    let availableRoles = Array.from(cardsToPlay().selectedRoles).filter(
      (role) => NON_UNIQUE_ROLES.includes(role) || !usedRoles.has(role),
    );

    if (
      cardsToPlay().villageois >
      players.filter((player) => player.role === PlayerRoleEnum.VILLAGEOIS)
        .length
    ) {
      availableRoles.push(PlayerRoleEnum.VILLAGEOIS);
    }

    if (
      cardsToPlay().loupGarou >
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
        (role) => role !== PlayerRoleEnum.SOEUR,
      );
    }

    if (
      usedRoles.has(PlayerRoleEnum.FRERE) &&
      players.filter((player) => player.role === PlayerRoleEnum.FRERE)
        .length === 3
    ) {
      availableRoles = availableRoles.filter(
        (role) => role !== PlayerRoleEnum.FRERE,
      );
    }

    return availableRoles;
  }

  private canCreateGame(players: Player[]): boolean {
    let canCreate = players.every(
      (player) => player.role !== PlayerRoleEnum.NOT_SELECTED,
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

  private affectLastRoleToPlayers(): void {
    const lastRole = this.availableRoles()[0];
    this.players()
      .filter((player) => player.role === PlayerRoleEnum.NOT_SELECTED)
      .forEach((player) => this.newGameService.changeRole(player.id, lastRole));
  }
}
