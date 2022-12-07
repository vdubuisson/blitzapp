import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActionSheetOptions,
  CheckboxCustomEvent,
  IonicModule,
  SelectCustomEvent,
} from '@ionic/angular';
import { Player } from '../../models/player.model';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleImagePipe } from '../../pipes/player-role-image/player-role-image.pipe';
import { PlayerDisplayModeEnum } from '../../enums/player-display-mode.enum';
import { PlayerStatusPipe } from '../../pipes/player-status/player-status.pipe';
import { PlayerRoleEnum } from '../../enums/player-role.enum';

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
  providers: [PlayerRoleNamePipe],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() player!: Player;

  @Input() displayMode: PlayerDisplayModeEnum = PlayerDisplayModeEnum.DEFAULT;

  @Input() disabled = false;

  @Input() checked = false;

  @Input() set selectableRoles(roleList: PlayerRoleEnum[]) {
    const roles = [...roleList];
    if (
      this.player.role !== PlayerRoleEnum.NOT_SELECTED &&
      !roles.includes(this.player.role)
    ) {
      roles.push(this.player.role);
    }
    this.sortedRoles = roles.sort((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b))
    );
  }

  @Output() remove = new EventEmitter<void>();

  @Output() checkedChange = new EventEmitter<boolean>();

  @Output() roleChange = new EventEmitter<PlayerRoleEnum>();

  protected playerDisplayModeEnum = PlayerDisplayModeEnum;
  protected playerRoleEnum = PlayerRoleEnum;
  protected sortedRoles: PlayerRoleEnum[] = [];
  protected customInterfaceOptions: ActionSheetOptions = {
    header: 'CHOISIR UN RÔLE',
    buttons: [],
  };

  constructor(private playerRoleNamePipe: PlayerRoleNamePipe) {}

  protected onCheckedChange(event: Event) {
    this.checkedChange.emit((event as CheckboxCustomEvent).detail.checked);
  }

  protected onRemove() {
    this.remove.emit();
  }

  protected onRoleChange(event: Event) {
    this.roleChange.emit((event as SelectCustomEvent).detail.value);
  }
}
