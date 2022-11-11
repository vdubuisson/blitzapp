import { Component } from '@angular/core';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';

@Component({
  selector: 'lgmj-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  players: Player[] = [
    {
      id: 0,
      name: 'Valentin',
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: [],
      isDead: false,
    },
    {
      id: 0,
      name: 'Jean-Baptiste',
      role: PlayerRoleEnum.LOUP_GAROU,
      statuses: [],
      isDead: false,
    },
    {
      id: 0,
      name: 'Davy',
      role: PlayerRoleEnum.SORCIERE,
      statuses: [],
      isDead: false,
    },
    {
      id: 0,
      name: 'Romain',
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: [],
      isDead: false,
    },
  ];
}
