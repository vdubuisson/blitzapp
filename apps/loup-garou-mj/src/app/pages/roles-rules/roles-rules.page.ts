import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ROLES_RULES } from './rules/roles-rules';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { PlayerRoleImagePipe } from '../../core/pipes/player-role-image/player-role-image.pipe';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'lgmj-roles-rules',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    HeaderComponent,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './roles-rules.page.html',
  styleUrls: ['./roles-rules.page.scss'],
})
export class RolesRulesPage {
  protected rules = ROLES_RULES;
  protected roles = Object.values(PlayerRoleEnum)
    .filter((role) => role !== PlayerRoleEnum.NOT_SELECTED)
    .sort((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b))
    );

  constructor(private playerRoleNamePipe: PlayerRoleNamePipe) {}
}
