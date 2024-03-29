import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ROLES_RULES } from '../../core/values/roles-rules';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { PlayerRoleImagePipe } from '../../core/pipes/player-role-image/player-role-image.pipe';
import { HeaderComponent } from '../../core/components/header/header.component';
import { ROLE_TRACK_BY } from '../../core/utils/role.track-by';
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-roles-rules',
  standalone: true,
  imports: [
    CommonModule,
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    HeaderComponent,
    NgOptimizedImage,
    IonContent,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonThumbnail,
    IonLabel,
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

  protected roleTrackBy = ROLE_TRACK_BY;

  constructor(private playerRoleNamePipe: PlayerRoleNamePipe) {}
}
