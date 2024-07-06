import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionItemModule } from '../../core/components/accordion-item/accordion-item.module';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { PlayerRoleImagePipe } from '../../core/pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { ROLES_RULES } from '../../core/values/roles-rules';

@Component({
  selector: 'lgmj-roles-rules',
  standalone: true,
  imports: [
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    NgOptimizedImage,
    AccordionItemModule,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './roles-rules.page.html',
  styleUrls: ['./roles-rules.page.scss'],
})
export class RolesRulesPage {
  protected rules = ROLES_RULES;
  protected roles: PlayerRoleEnum[] = Object.values(PlayerRoleEnum)
    .filter((role) => role !== PlayerRoleEnum.NOT_SELECTED)
    .sort((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b)),
    );

  constructor(private playerRoleNamePipe: PlayerRoleNamePipe) {}
}
