import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AccordionItemModule } from '@/components/accordion-item/accordion-item.module';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerRoleImagePipe } from '@/pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';
import { ROLES_RULES } from '@/values/roles-rules';

@Component({
  selector: 'lgmj-roles-rules',
  imports: [
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    NgOptimizedImage,
    AccordionItemModule,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './roles-rules.page.html',
  styleUrls: ['./roles-rules.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RolesRulesPage {
  private readonly playerRoleNamePipe = inject(PlayerRoleNamePipe);

  protected readonly rules = ROLES_RULES;
  protected readonly roles: PlayerRoleEnum[] = Object.values(PlayerRoleEnum)
    .filter((role) => role !== PlayerRoleEnum.NOT_SELECTED)
    .toSorted((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b)),
    );
}
