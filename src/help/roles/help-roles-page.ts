import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AccordionItemModule } from '@/shared/components/accordion-item/accordion-item-module';
import { PlayerRole } from '@/types/player-role';
import { PlayerRoleImagePipe } from '@/shared/pipes/player-role-image/player-role-image-pipe';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { ROLES_RULES } from '@/texts/roles-rules';

@Component({
  selector: 'lgmj-help-roles-page',
  imports: [
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    NgOptimizedImage,
    AccordionItemModule,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './help-roles-page.html',
  styleUrls: ['./help-roles-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HelpRolesPage {
  private readonly playerRoleNamePipe = inject(PlayerRoleNamePipe);

  protected readonly rules = ROLES_RULES;
  protected readonly roles: PlayerRole[] = Object.values(PlayerRole)
    .filter((role) => role !== PlayerRole.NOT_SELECTED)
    .toSorted((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b)),
    );
}
