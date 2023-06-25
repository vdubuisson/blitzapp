import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxCustomEvent, IonicModule } from '@ionic/angular';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleImagePipe } from '../../core/pipes/player-role-image/player-role-image.pipe';
import { HeaderComponent } from '../../core/components/header/header.component';
import { ROLE_TRACK_BY } from '../../core/utils/role.track-by';
import { GAME_BOX_CONTENTS } from '../../core/constants/game-box-contents';
import { GameBoxEnum } from '../../core/enums/game-box.enum';
import { GameBoxNamePipe } from '../../core/pipes/game-box-name/game-box-name.pipe';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { RoleChoiceService } from '../../core/services/role-choice/role-choice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lgmj-roles-choice',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    GameBoxNamePipe,
    HeaderComponent,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './roles-choice.page.html',
  styleUrls: ['./roles-choice.page.scss'],
})
export class RolesChoicePage {
  protected boxContents = GAME_BOX_CONTENTS;
  protected boxes = Object.values(GameBoxEnum);

  protected selectedRoles: Set<PlayerRoleEnum> = new Set();

  protected roleTrackBy = ROLE_TRACK_BY;

  constructor(
    private playerRoleNamePipe: PlayerRoleNamePipe,
    private roleChoiceService: RoleChoiceService,
    private router: Router
  ) {
    Object.values(this.boxContents).forEach((roles) => {
      roles.sort((a, b) =>
        this.playerRoleNamePipe
          .transform(a)
          .localeCompare(this.playerRoleNamePipe.transform(b))
      );
    });

    this.roleChoiceService
      .getCurrentChosenRoles()
      .subscribe((roles) => (this.selectedRoles = roles));
  }

  protected onRoleCheckChange(event: Event): void {
    const eventDetail = (event as CheckboxCustomEvent<PlayerRoleEnum>).detail;
    if (eventDetail.checked) {
      this.selectedRoles.add(eventDetail.value);
    } else {
      this.selectedRoles.delete(eventDetail.value);
    }
  }

  validateRoles() {
    this.roleChoiceService.setRoles(this.selectedRoles);
    this.router.navigate(['new-game']);
  }

  deselectAll() {
    this.selectedRoles.clear();
  }
}
