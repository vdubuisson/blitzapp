import { Component } from '@angular/core';
import { PlayerDisplayModeEnum } from '../enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';

@Component({
  selector: 'lgmj-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  playerDisplayMode = PlayerDisplayModeEnum.SELECT_SINGLE;

  players: Player[] = [
    {
      id: 0,
      name: 'Valentin',
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: [],
      isDead: false,
    },
    {
      id: 1,
      name: 'Jean-Baptiste',
      role: PlayerRoleEnum.LOUP_GAROU,
      statuses: [],
      isDead: false,
    },
    {
      id: 2,
      name: 'Davy',
      role: PlayerRoleEnum.SORCIERE,
      statuses: [],
      isDead: false,
    },
    {
      id: 3,
      name: 'Romain',
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: [],
      isDead: false,
    },
  ];

  private selectedPlayers = new Set();
  private selectedPlayer?: number;

  protected onMultiPlayerChecked(id: number, checked: boolean): void {
    if (checked) {
      this.selectedPlayers.add(id);
    } else {
      this.selectedPlayers.delete(id);
    }
  }

  protected onSinglePlayerChecked(event: Event) {
    this.selectedPlayer = (
      event as CustomEvent<{ value: number }>
    ).detail.value;
  }
}
