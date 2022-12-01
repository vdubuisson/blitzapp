import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxCustomEvent, IonicModule } from '@ionic/angular';
import { Player } from '../../models/player.model';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleImagePipe } from '../../pipes/player-role-image/player-role-image.pipe';
import { PlayerDisplayModeEnum } from '../../enums/player-display-mode.enum';
import { PlayerStatusPipe } from '../../pipes/player-status/player-status.pipe';

@Component({
  selector: 'lgmj-player',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    PlayerStatusPipe,
  ],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() player!: Player;

  @Input() displayMode: PlayerDisplayModeEnum = PlayerDisplayModeEnum.DEFAULT;

  @Input() disabled = false;

  @Input() checked = false;

  @Output() remove = new EventEmitter<void>();

  @Output() checkedChange = new EventEmitter<boolean>();

  protected playerDisplayModeEnum = PlayerDisplayModeEnum;

  protected onCheckedChange(event: Event) {
    this.checkedChange.emit((event as CheckboxCustomEvent).detail.checked);
  }

  protected onRemove() {
    this.remove.emit();
  }
}
