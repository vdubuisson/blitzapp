import { Player } from '@/shared/types/player';
import { PlayerRole } from '@/shared/types/player-role';
import { Component, input, model, output } from '@angular/core';
import {
  PlayerDisplayMode,
  PlayerDisplayModeEnum,
} from './player-display-mode';

@Component({
  selector: 'lgmj-player-card',
  standalone: true,
  template: '',
})
export class PlayerCardMock {
  readonly player = input.required<Player>();
  readonly displayMode = input<PlayerDisplayMode>(
    PlayerDisplayModeEnum.DEFAULT,
  );
  readonly disabled = input(false);
  readonly noSelfRole = input<boolean>(false);
  readonly selectableRoles = input<PlayerRole[]>([]);
  readonly checked = model(false);
  readonly roleChange = output<PlayerRole>();
}
