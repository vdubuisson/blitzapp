import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSkull, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { PLAYER_STATUS_ORDER } from '@/config/player-status-order';
import { PlayerDisplayMode } from '@/shared/components/player-card/player-display-mode';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { SelectOverlayContent } from '@/layout/select-overlay/select-overlay-content';
import { PlayerRoleImagePipe } from '@/shared/pipes/player-role-image/player-role-image-pipe';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { PlayerStatusIconPipe } from '@/shared/pipes/player-status-icon/player-status-icon-pipe';
import { SelectOverlayManager } from '@/layout/select-overlay/select-overlay-manager';

@Component({
  selector: 'lgmj-player-card',
  imports: [
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    PlayerStatusIconPipe,
    NgOptimizedImage,
    FaIconComponent,
    FormsModule,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerCard {
  readonly player = input.required<Player>();

  readonly displayMode = input<PlayerDisplayMode>(PlayerDisplayMode.DEFAULT);

  readonly disabled = input(false);

  readonly noSelfRole = input<boolean>(false);

  readonly selectableRoles = input<PlayerRole[]>([]);

  readonly checked = model(false);

  readonly roleChange = output<PlayerRole>();

  private readonly checkboxElement =
    viewChild<ElementRef<HTMLInputElement>>('checkbox');

  private readonly playerRoleNamePipe = inject(PlayerRoleNamePipe);
  private readonly selectOverlayManager = inject(SelectOverlayManager);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly playerDisplayModeEnum = PlayerDisplayMode;
  protected readonly playerRoleEnum = PlayerRole;

  protected readonly deadIcon = faSkull;
  protected readonly selectIcon = faSortDown;

  protected readonly sortedRoles = computed<PlayerRole[]>(() => {
    const sortedRoles = [...this.selectableRoles()];
    if (
      !this.noSelfRole() &&
      this.player().role !== PlayerRole.NOT_SELECTED &&
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

  protected readonly sortedStatuses = computed<PlayerStatus[]>(() =>
    Array.from(this.player().statuses).toSorted(
      (status1, status2) =>
        PLAYER_STATUS_ORDER.indexOf(status1) -
        PLAYER_STATUS_ORDER.indexOf(status2),
    ),
  );

  protected readonly displayedRole = computed<PlayerRole>(() => {
    if (
      this.displayMode() === PlayerDisplayMode.EDIT_ROLE &&
      this.selectedRole() !== undefined
    ) {
      return this.selectedRole() as PlayerRole;
    } else {
      return this.player().role;
    }
  });

  private readonly selectedRole = signal<PlayerRole | undefined>(undefined);

  protected readonly selectionOpened = signal(false);

  protected onCheckedChange() {
    this.checked.set(this.checkboxElement()?.nativeElement.checked ?? false);
  }

  protected onCheckboxClick() {
    if (
      this.checked() &&
      this.displayMode() === PlayerDisplayMode.SELECT_SINGLE
    ) {
      this.checked.set(false);
    }
  }

  protected openSelectRoleOverlay() {
    const selectOverlay: SelectOverlayContent = {
      header: 'CHOISIR UN RÔLE',
      options: this.sortedRoles().map((role) => ({
        value: role,
        label: this.playerRoleNamePipe.transform(role),
        active: role === this.player().role,
      })),
    };
    this.selectOverlayManager.selectedValue
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((role) => {
        this.selectionOpened.set(false);
        this.selectedRole.set(role as PlayerRole);
        if (role !== undefined) {
          this.roleChange.emit(role as PlayerRole);
        }
      });
    this.selectOverlayManager.openOverlay(selectOverlay);
    this.selectionOpened.set(true);
  }
}
