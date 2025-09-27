import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlayerCard } from '@/shared/components/player-card/player-card';
import { NON_UNIQUE_ROLES } from '@/config/non-unique-roles';
import { PlayerDisplayMode } from '@/shared/components/player-card/player-display-mode';
import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';

@Component({
  selector: 'lgmj-new-game-players-roles-page',
  imports: [RouterLink, PlayerCard],
  templateUrl: './new-game-players-roles-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NewGamePlayersRolesPage {
  private readonly newGameCreator = inject(NewGameCreator);
  private readonly cardChoiceState = inject(CardChoiceStore).state.asReadonly();

  protected readonly players: Signal<Player[]> =
    this.newGameCreator.currentPlayers;

  protected readonly playerDisplayMode = PlayerDisplayMode.EDIT_ROLE;

  protected readonly canCreate: Signal<boolean> = computed(() =>
    this.canCreateGame(this.players()),
  );

  protected readonly availableRoles: Signal<PlayerRole[]> = computed(() =>
    this.getAvailableRoles(this.players()),
  );

  protected changeRole(id: number, role: PlayerRole): void {
    this.newGameCreator.changeRole(id, role);
    if (this.availableRoles().length === 1) {
      this.affectLastRoleToPlayers();
    }
  }

  protected createGame(): void {
    this.newGameCreator.createGame();
  }

  private getAvailableRoles(players: Player[]): PlayerRole[] {
    const cardsToPlay = this.cardChoiceState();
    const usedRoles = new Set(players.map((player) => player.role));
    let availableRoles = Array.from(cardsToPlay.selectedRoles).filter(
      (role) => NON_UNIQUE_ROLES.includes(role) || !usedRoles.has(role),
    );

    if (
      cardsToPlay.villageois >
      players.filter((player) => player.role === PlayerRole.VILLAGEOIS).length
    ) {
      availableRoles.push(PlayerRole.VILLAGEOIS);
    }

    if (
      cardsToPlay.loupGarou >
      players.filter((player) => player.role === PlayerRole.LOUP_GAROU).length
    ) {
      availableRoles.push(PlayerRole.LOUP_GAROU);
    }

    if (
      usedRoles.has(PlayerRole.SOEUR) &&
      players.filter((player) => player.role === PlayerRole.SOEUR).length === 2
    ) {
      availableRoles = availableRoles.filter(
        (role) => role !== PlayerRole.SOEUR,
      );
    }

    if (
      usedRoles.has(PlayerRole.FRERE) &&
      players.filter((player) => player.role === PlayerRole.FRERE).length === 3
    ) {
      availableRoles = availableRoles.filter(
        (role) => role !== PlayerRole.FRERE,
      );
    }

    return availableRoles;
  }

  private canCreateGame(players: Player[]): boolean {
    let canCreate = players.every(
      (player) => player.role !== PlayerRole.NOT_SELECTED,
    );
    if (
      canCreate &&
      players.some((player) => player.role === PlayerRole.SOEUR)
    ) {
      canCreate =
        players.filter((player) => player.role === PlayerRole.SOEUR).length ===
        2;
    }
    if (
      canCreate &&
      players.some((player) => player.role === PlayerRole.FRERE)
    ) {
      canCreate =
        players.filter((player) => player.role === PlayerRole.FRERE).length ===
        3;
    }
    return canCreate;
  }

  private affectLastRoleToPlayers(): void {
    const lastRole = this.availableRoles()[0];
    this.players()
      .filter((player) => player.role === PlayerRole.NOT_SELECTED)
      .forEach((player) => this.newGameCreator.changeRole(player.id, lastRole));
  }
}
