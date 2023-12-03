import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CheckboxCustomEvent, IonicModule } from '@ionic/angular';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleImagePipe } from '../../core/pipes/player-role-image/player-role-image.pipe';
import { HeaderComponent } from '../../core/components/header/header.component';
import { ROLE_TRACK_BY } from '../../core/utils/role.track-by';
import { GAME_BOX_CONTENTS } from '../../core/configs/game-box-contents';
import { GameBoxEnum } from '../../core/enums/game-box.enum';
import { GameBoxNamePipe } from '../../core/pipes/game-box-name/game-box-name.pipe';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { CardChoiceService } from '../../core/services/card-choice/card-choice.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardList } from '../../core/models/card-list.model';

interface RoleForm {
  villageois: FormControl<number | null>;
  loupGarou: FormControl<number | null>;
}

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
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './roles-choice.page.html',
  styleUrls: ['./roles-choice.page.scss'],
})
export class RolesChoicePage {
  protected boxContents = GAME_BOX_CONTENTS;
  protected boxes: GameBoxEnum[] = Object.values(GameBoxEnum);

  protected selectedRoles: Set<PlayerRoleEnum> = new Set();

  protected roleTrackBy = ROLE_TRACK_BY;

  protected loupGarouRole = PlayerRoleEnum.LOUP_GAROU;
  protected villageoisRole = PlayerRoleEnum.VILLAGEOIS;

  protected roleCountForm: FormGroup<RoleForm>;

  protected get playersCount(): number {
    const formValue = this.roleCountForm.value;
    return (
      this.selectedRoles.size +
      (formValue.villageois ?? 0) +
      (formValue.loupGarou ?? 0) +
      (this.selectedRoles.has(PlayerRoleEnum.SOEUR) ? 1 : 0) +
      (this.selectedRoles.has(PlayerRoleEnum.FRERE) ? 2 : 0) -
      (this.selectedRoles.has(PlayerRoleEnum.VOLEUR) ? 2 : 0)
    );
  }

  protected get requiredVillageois(): number {
    return this.selectedRoles.has(PlayerRoleEnum.VOLEUR) ? 2 : 0;
  }

  constructor(
    private playerRoleNamePipe: PlayerRoleNamePipe,
    private roleChoiceService: CardChoiceService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    Object.values(this.boxContents).forEach((roles) => {
      roles.sort((a, b) =>
        this.playerRoleNamePipe
          .transform(a)
          .localeCompare(this.playerRoleNamePipe.transform(b)),
      );
    });

    this.roleCountForm = this.formBuilder.group({
      loupGarou: [0, Validators.min(0)],
      villageois: [0, Validators.min(this.requiredVillageois)],
    });

    this.roleChoiceService.getCurrentChosenCards().subscribe((roleList) => {
      this.selectedRoles = roleList.selectedRoles;
      this.roleCountForm.patchValue(roleList);
    });
  }

  protected onRoleCheckChange(event: Event): void {
    const eventDetail = (event as CheckboxCustomEvent<PlayerRoleEnum>).detail;
    if (eventDetail.checked) {
      this.selectedRoles.add(eventDetail.value);
      if (eventDetail.value === PlayerRoleEnum.VOLEUR) {
        const currentVillageois = this.roleCountForm.value.villageois ?? 0;
        this.roleCountForm.patchValue({ villageois: currentVillageois + 2 });
      }
    } else {
      this.selectedRoles.delete(eventDetail.value);
      if (eventDetail.value === PlayerRoleEnum.VOLEUR) {
        const currentVillageois = this.roleCountForm.value.villageois ?? 0;
        this.roleCountForm.patchValue({
          villageois: Math.max(currentVillageois - 2, 0),
        });
      }
    }
  }

  protected validateRoles() {
    const cardList: CardList = {
      selectedRoles: this.selectedRoles,
      playersNumber: this.playersCount,
      villageois: this.roleCountForm.value.villageois ?? 0,
      loupGarou: this.roleCountForm.value.loupGarou ?? 0,
    };
    this.roleChoiceService.setCards(cardList);
    this.router.navigate(['new-game']);
  }

  protected deselectAll() {
    this.selectedRoles.clear();
    this.roleCountForm.patchValue({
      villageois: 0,
      loupGarou: 0,
    });
  }

  protected selectInput(event: Event): void {
    (
      ((event as CustomEvent).detail as FocusEvent).target as HTMLInputElement
    ).select();
  }
}
