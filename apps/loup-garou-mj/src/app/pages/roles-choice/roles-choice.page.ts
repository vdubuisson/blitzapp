import { SelectionModel } from '@angular/cdk/collections';
import { NgFor, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccordionItemModule } from '../../core/components/accordion-item/accordion-item.module';
import { GAME_BOX_CONTENTS } from '../../core/configs/game-box-contents';
import { GameBoxEnum } from '../../core/enums/game-box.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { CardList } from '../../core/models/card-list.model';
import { GameBoxNamePipe } from '../../core/pipes/game-box-name/game-box-name.pipe';
import { PlayerRoleImagePipe } from '../../core/pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { CardChoiceService } from '../../core/services/card-choice/card-choice.service';
import { ROLE_TRACK_BY } from '../../core/utils/role.track-by';

interface RoleForm {
  villageois: FormControl<number | null>;
  loupGarou: FormControl<number | null>;
}

@Component({
  selector: 'lgmj-roles-choice',
  standalone: true,
  imports: [
    NgFor,
    PlayerRoleNamePipe,
    PlayerRoleImagePipe,
    GameBoxNamePipe,
    UpperCasePipe,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    AccordionItemModule,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './roles-choice.page.html',
  styleUrls: ['./roles-choice.page.scss'],
})
export class RolesChoicePage {
  protected boxContents = GAME_BOX_CONTENTS;
  protected boxes: GameBoxEnum[] = Object.values(GameBoxEnum);

  protected roleTrackBy = ROLE_TRACK_BY;

  protected loupGarouRole = PlayerRoleEnum.LOUP_GAROU;
  protected villageoisRole = PlayerRoleEnum.VILLAGEOIS;

  protected roleCountForm: FormGroup<RoleForm>;

  protected selectedRoles = computed<Set<PlayerRoleEnum>>(() => {
    const selection = this.rolesSelectionChange()?.source?.selected ?? [];
    return new Set(selection);
  });

  private rolesSelection = new SelectionModel<PlayerRoleEnum>(true);
  private rolesSelectionChange = toSignal(this.rolesSelection.changed);

  private villageoisCount: WritableSignal<number> = signal(0);
  private loupGarouCount: WritableSignal<number> = signal(0);

  protected playersCount: Signal<number> = computed(
    () =>
      this.selectedRoles().size +
      this.villageoisCount() +
      this.loupGarouCount() +
      (this.selectedRoles().has(PlayerRoleEnum.SOEUR) ? 1 : 0) +
      (this.selectedRoles().has(PlayerRoleEnum.FRERE) ? 2 : 0) -
      (this.selectedRoles().has(PlayerRoleEnum.VOLEUR) ? 2 : 0),
  );

  protected requiredVillageois: Signal<number> = computed(() =>
    this.selectedRoles().has(PlayerRoleEnum.VOLEUR) ? 2 : 0,
  );

  constructor(
    private playerRoleNamePipe: PlayerRoleNamePipe,
    private cardChoiceService: CardChoiceService,
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
      villageois: [0, Validators.min(this.requiredVillageois())],
    });

    this.listenRoleCountChange('loupGarou');
    this.listenRoleCountChange('villageois');

    const cardList: CardList = this.cardChoiceService.currentChosenCards();
    this.rolesSelection.setSelection(...cardList.selectedRoles);
    this.roleCountForm.patchValue(cardList);
  }

  protected onRoleCheckChange(role: PlayerRoleEnum): void {
    this.rolesSelection.toggle(role);
    if (role === PlayerRoleEnum.VOLEUR) {
      const currentVillageois = this.roleCountForm.value.villageois ?? 0;
      if (this.rolesSelection.isSelected(role)) {
        this.roleCountForm.patchValue({ villageois: currentVillageois + 2 });
      } else {
        this.roleCountForm.patchValue({
          villageois: Math.max(currentVillageois - 2, 0),
        });
      }
    }
  }

  protected validateRoles() {
    const cardList: CardList = {
      selectedRoles: this.selectedRoles(),
      playersNumber: this.playersCount(),
      villageois: this.roleCountForm.value.villageois ?? 0,
      loupGarou: this.roleCountForm.value.loupGarou ?? 0,
    };
    this.cardChoiceService.setCards(cardList);
    this.router.navigate(['new-game']);
  }

  protected deselectAll() {
    this.rolesSelection.clear();
    this.roleCountForm.patchValue({
      villageois: 0,
      loupGarou: 0,
    });
  }

  protected selectInput(event: FocusEvent): void {
    (event.target as HTMLInputElement).select();
  }

  private listenRoleCountChange(role: string): void {
    this.roleCountForm
      .get(role)
      ?.valueChanges.pipe(takeUntilDestroyed())
      .subscribe((newValue) => {
        if (role === 'villageois') {
          this.villageoisCount.set(newValue ?? 0);
        } else {
          this.loupGarouCount.set(newValue ?? 0);
        }
      });
  }
}
