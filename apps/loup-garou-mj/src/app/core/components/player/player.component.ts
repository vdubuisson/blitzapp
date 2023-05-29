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
import { ROLE_TRACK_BY } from '../../utils/role.track-by';
import { STATUS_TRACK_BY } from '../../utils/status.track-by';

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

  @Input() noSelfRole = false;

  @Input() set selectableRoles(roleList: PlayerRoleEnum[]) {
    const sortedRoles = [...roleList];
    if (
      !this.noSelfRole &&
      this.player.role !== PlayerRoleEnum.NOT_SELECTED &&
      !sortedRoles.includes(this.player.role)
    ) {
      sortedRoles.push(this.player.role);
    }
    sortedRoles.sort((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b))
    );
    this.sortedRoles = sortedRoles;
  }

  @Output() checkedChange = new EventEmitter<boolean>();

  @Output() roleChange = new EventEmitter<PlayerRoleEnum>();

  protected roleTrackBy = ROLE_TRACK_BY;
  protected statusTrackBy = STATUS_TRACK_BY;

  protected playerDisplayModeEnum = PlayerDisplayModeEnum;
  protected playerRoleEnum = PlayerRoleEnum;
  protected sortedRoles: PlayerRoleEnum[] = [];
  protected customInterfaceOptions: ActionSheetOptions = {
    header: 'CHOISIR UN RÔLE',
    buttons: [],
  };

  constructor(private playerRoleNamePipe: PlayerRoleNamePipe) {}

  protected onCheckedChange(event: Event) {
    console.log('onCheckedChange', event);
    this.checkedChange.emit((event as CheckboxCustomEvent).detail.checked);
  }

  protected onRoleChange(event: Event) {
    this.roleChange.emit((event as SelectCustomEvent).detail.value);
  }
}
