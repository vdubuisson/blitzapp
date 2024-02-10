import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ActionSheetOptions,
  CheckboxCustomEvent,
  IonCheckbox,
  IonIcon,
  IonItem,
  IonLabel,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
  SelectCustomEvent,
} from '@ionic/angular/standalone';
import { Player } from '../../models/player.model';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleImagePipe } from '../../pipes/player-role-image/player-role-image.pipe';
import { PlayerDisplayModeEnum } from '../../enums/player-display-mode.enum';
import { PlayerStatusIconPipe } from '../../pipes/player-status-icon/player-status-icon.pipe';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { ROLE_TRACK_BY } from '../../utils/role.track-by';
import { STATUS_TRACK_BY } from '../../utils/status.track-by';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { PLAYER_STATUS_ORDER_CONFIG } from '../../configs/player-status-order.config';
import { addIcons } from 'ionicons';
import { skull } from 'ionicons/icons';

@Component({
  selector: 'lgmj-player',
  standalone: true,
  imports: [
    CommonModule,
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    PlayerStatusIconPipe,
    NgOptimizedImage,
    IonItem,
    IonIcon,
    IonThumbnail,
    IonLabel,
    IonCheckbox,
    IonRadio,
    IonSelect,
    IonSelectOption,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnChanges {
  @Input({ required: true }) player!: Player;

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
        .localeCompare(this.playerRoleNamePipe.transform(b)),
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
  protected sortedStatuses: PlayerStatusEnum[] = [];

  constructor(private playerRoleNamePipe: PlayerRoleNamePipe) {
    addIcons({ skull });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['player']) {
      const playerStatuses: PlayerStatusEnum[] = Array.from(
        this.player.statuses,
      );
      playerStatuses.sort(
        (status1, status2) =>
          PLAYER_STATUS_ORDER_CONFIG.indexOf(status1) -
          PLAYER_STATUS_ORDER_CONFIG.indexOf(status2),
      );
      this.sortedStatuses = playerStatuses;
    }
  }

  protected onCheckedChange(event: Event) {
    this.checkedChange.emit((event as CheckboxCustomEvent).detail.checked);
  }

  protected onRoleChange(event: Event) {
    this.roleChange.emit((event as SelectCustomEvent).detail.value);
  }
}
