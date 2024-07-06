import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  computed,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSkull, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { PLAYER_STATUS_ORDER_CONFIG } from '../../configs/player-status-order.config';
import { PlayerDisplayModeEnum } from '../../enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { SelectOverlay } from '../../models/select-overlay.model';
import { PlayerRoleImagePipe } from '../../pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { PlayerStatusIconPipe } from '../../pipes/player-status-icon/player-status-icon.pipe';
import { SelectOverlayService } from '../../services/select-overlay/select-overlay.service';

@Component({
  selector: 'lgmj-player',
  standalone: true,
  imports: [
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    PlayerStatusIconPipe,
    NgOptimizedImage,
    FaIconComponent,
    FormsModule,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  player = input.required<Player>();

  displayMode = input<PlayerDisplayModeEnum>(PlayerDisplayModeEnum.DEFAULT);

  @Input() disabled = false;

  @Input() checked = false;

  noSelfRole = input<boolean>(false);

  selectableRoles = input<PlayerRoleEnum[]>([]);

  @Output() checkedChange = new EventEmitter<boolean>();

  @Output() roleChange = new EventEmitter<PlayerRoleEnum>();

  @ViewChild('checkbox') checkboxElement?: ElementRef<HTMLInputElement>;

  protected playerDisplayModeEnum = PlayerDisplayModeEnum;
  protected playerRoleEnum = PlayerRoleEnum;

  protected sortedRoles = computed<PlayerRoleEnum[]>(() => {
    const sortedRoles = [...this.selectableRoles()];
    if (
      !this.noSelfRole() &&
      this.player().role !== PlayerRoleEnum.NOT_SELECTED &&
      !sortedRoles.includes(this.player().role)
    ) {
      sortedRoles.push(this.player().role);
    }
    sortedRoles.sort((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b)),
    );
    return sortedRoles;
  });

  protected sortedStatuses = computed<PlayerStatusEnum[]>(() => {
    const playerStatuses: PlayerStatusEnum[] = Array.from(
      this.player().statuses,
    );
    playerStatuses.sort(
      (status1, status2) =>
        PLAYER_STATUS_ORDER_CONFIG.indexOf(status1) -
        PLAYER_STATUS_ORDER_CONFIG.indexOf(status2),
    );
    return playerStatuses;
  });

  protected displayedRole = computed<PlayerRoleEnum>(() => {
    if (
      this.displayMode() === PlayerDisplayModeEnum.EDIT_ROLE &&
      this.selectedRole() !== undefined
    ) {
      return this.selectedRole() as PlayerRoleEnum;
    } else {
      return this.player().role;
    }
  });

  private selectedRole = signal<PlayerRoleEnum | undefined>(undefined);

  protected deadIcon = faSkull;
  protected selectIcon = faSortDown;

  protected selectionOpened = false;

  constructor(
    private playerRoleNamePipe: PlayerRoleNamePipe,
    private selectOverlayService: SelectOverlayService,
    private destroyRef: DestroyRef,
  ) {}

  protected onCheckedChange() {
    this.checkedChange.emit(this.checkboxElement?.nativeElement.checked);
  }

  protected onCheckboxClick() {
    if (
      this.checked &&
      this.displayMode() === PlayerDisplayModeEnum.SELECT_SINGLE
    ) {
      this.checkedChange.emit(false);
    }
  }

  protected openSelectRoleOverlay() {
    const selectOverlay: SelectOverlay = {
      header: 'CHOISIR UN RÔLE',
      options: this.sortedRoles().map((role) => ({
        value: role,
        label: this.playerRoleNamePipe.transform(role),
        active: role === this.player().role,
      })),
    };
    this.selectOverlayService.selectedValue
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((role) => {
        this.selectionOpened = false;
        this.selectedRole.set(role as PlayerRoleEnum);
        if (role !== undefined) {
          this.roleChange.emit(role as PlayerRoleEnum);
        }
      });
    this.selectOverlayService.openOverlay(selectOverlay);
    this.selectionOpened = true;
  }
}
