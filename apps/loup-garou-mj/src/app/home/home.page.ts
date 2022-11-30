import { Component } from '@angular/core';
import { RadioGroupCustomEvent } from '@ionic/angular';
import { PlayerDisplayModeEnum } from '../enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { PlayerStatusEnum } from '../enums/player-status.enum';
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
      statuses: new Set([PlayerStatusEnum.LOVER]),
      isDead: false,
    },
    {
      id: 1,
      name: 'Jean-Baptiste',
      role: PlayerRoleEnum.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    },
    {
      id: 2,
      name: 'Davy',
      role: PlayerRoleEnum.SORCIERE,
      statuses: new Set([
        PlayerStatusEnum.HEALTH_POTION,
        PlayerStatusEnum.DEATH_POTION,
      ]),
      isDead: true,
    },
    {
      id: 3,
      name: 'Romain',
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set([PlayerStatusEnum.CAPTAIN]),
      isDead: false,
    },
    {
      id: 4,
      name: 'Anne-Lise',
      role: PlayerRoleEnum.CHASSEUR,
      statuses: new Set([PlayerStatusEnum.LOVER]),
      isDead: false,
    },
  ];

  selectablePlayers = new Set([0, 1, 2, 3]);

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
    this.selectedPlayer = (event as RadioGroupCustomEvent).detail.value;
  }
}
