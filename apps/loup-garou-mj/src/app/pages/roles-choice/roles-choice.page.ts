import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxCustomEvent, IonicModule } from '@ionic/angular';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleImagePipe } from '../../core/pipes/player-role-image/player-role-image.pipe';
import { HeaderComponent } from '../../core/components/header/header.component';
import { ROLE_TRACK_BY } from '../../core/utils/role.track-by';
import { GAME_BOX_CONTENTS } from '../../core/configs/game-box-contents';
import { GameBoxEnum } from '../../core/enums/game-box.enum';
import { GameBoxNamePipe } from '../../core/pipes/game-box-name/game-box-name.pipe';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { RoleChoiceService } from '../../core/services/role-choice/role-choice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RoleList } from '../../core/models/role-list.model';

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
    FormsModule,
    ReactiveFormsModule
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

  protected loupGarouRole = PlayerRoleEnum.LOUP_GAROU;
  protected villageoisRole = PlayerRoleEnum.VILLAGEOIS;

  protected roleCountForm: FormGroup;

  protected playersCount = 0;

  constructor(
    private playerRoleNamePipe: PlayerRoleNamePipe,
    private roleChoiceService: RoleChoiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    Object.values(this.boxContents).forEach((roles) => {
      roles.sort((a, b) =>
        this.playerRoleNamePipe
          .transform(a)
          .localeCompare(this.playerRoleNamePipe.transform(b))
      );
    });

    this.roleCountForm = this.formBuilder.group({
      loupGarou: [0, Validators.min(0)],
      villageois: [0, Validators.min(0)]
    });

    this.listenRoleCountChange('loupGarou');
    this.listenRoleCountChange('villageois');

    this.roleChoiceService
      .getCurrentChosenRoles()
      .subscribe((roleList) => {
        this.selectedRoles = roleList.selectedRoles;
        this.selectedRoles.forEach((role) => this.incrementPlayersCount(role));
        this.roleCountForm.patchValue(roleList);
      });
  }

  protected onRoleCheckChange(event: Event): void {
    const eventDetail = (event as CheckboxCustomEvent<PlayerRoleEnum>).detail;
    if (eventDetail.checked) {
      this.selectedRoles.add(eventDetail.value);
      this.incrementPlayersCount(eventDetail.value);
    } else {
      this.selectedRoles.delete(eventDetail.value);
      this.decrementPlayersCount(eventDetail.value);
    }
  }

  protected validateRoles() {
    const roleList: RoleList = {
      selectedRoles: this.selectedRoles,
      playersNumber: this.playersCount,
      ...this.roleCountForm.value
    };
    this.roleChoiceService.setRoles(roleList);
    this.router.navigate(['new-game']);
  }

  protected deselectAll() {
    this.selectedRoles.clear();
    this.roleCountForm.patchValue({
      villageois: 0,
      loupGarou: 0
    });
    this.playersCount = 0;
  }

  protected selectInput(event: Event): void {
    (((event as CustomEvent).detail as FocusEvent).target as HTMLInputElement).select();
  }

  private incrementPlayersCount(role: PlayerRoleEnum): void {
    switch (role) {
      case PlayerRoleEnum.SOEUR:
        this.playersCount += 2;
        break;
      case PlayerRoleEnum.FRERE:
        this.playersCount += 3;
        break;
      default:
        this.playersCount += 1;
    }
  }

  private decrementPlayersCount(role: PlayerRoleEnum): void {
    switch (role) {
      case PlayerRoleEnum.SOEUR:
        this.playersCount -= 2;
        break;
      case PlayerRoleEnum.FRERE:
        this.playersCount -= 3;
        break;
      default:
        this.playersCount -= 1;
    }
  }

  private listenRoleCountChange(role: string): void {
    this.roleCountForm.get(role)?.valueChanges.pipe(takeUntilDestroyed()).subscribe((newValue) => {
      const oldValue = this.roleCountForm.value[role];
      const diff = newValue - oldValue;
      this.playersCount += diff;
    });
  }
}
