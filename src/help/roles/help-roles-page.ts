import { ModalManager } from '@/layout/modal/modal-manager';
import { AccordionItemModule } from '@/shared/components/accordion-item/accordion-item-module';
import { PlayerRoleImagePipe } from '@/shared/pipes/player-role-image/player-role-image-pipe';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { ROLES_RULES } from '@/texts/roles-rules';
import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs';

@Component({
  selector: 'lgmj-help-roles-page',
  imports: [
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    NgOptimizedImage,
    AccordionItemModule,
    FaIconComponent,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './help-roles-page.html',
  styleUrls: ['./help-roles-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HelpRolesPage {
  private readonly playerRoleNamePipe = inject(PlayerRoleNamePipe);
  private readonly modalManager = inject(ModalManager);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly rules = ROLES_RULES;
  protected readonly roles: PlayerRole[] = Object.values(PlayerRoleEnum)
    .filter((role) => role !== PlayerRoleEnum.NOT_SELECTED)
    .toSorted((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b)),
    );

  protected readonly expandIcon = faExpand;

  protected showRoleCard(role: PlayerRole, event: MouseEvent): void {
    event.stopPropagation();
    this.modalManager
      .showPlayerCard(role)
      .pipe(first(), takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
