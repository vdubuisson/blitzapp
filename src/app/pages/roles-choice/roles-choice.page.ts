import { AccordionItemModule } from '@/components/accordion-item/accordion-item.module';
import { GAME_BOX_CONTENTS } from '@/configs/game-box-contents';
import { GameBoxEnum } from '@/enums/game-box.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { CardList } from '@/models/card-list.model';
import { GameBoxNamePipe } from '@/pipes/game-box-name/game-box-name.pipe';
import { PlayerRoleImagePipe } from '@/pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';
import { CardChoiceStore } from '@/stores/card-choice/card-choice.store';
import { SelectionModel } from '@angular/cdk/collections';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

type RoleForm = {
  villageois: FormControl<number | null>;
  loupGarou: FormControl<number | null>;
};

@Component({
  selector: 'lgmj-roles-choice',
  imports: [
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RolesChoicePage implements OnInit {
  private readonly playerRoleNamePipe = inject(PlayerRoleNamePipe);
  private readonly cardChoiceState = inject(CardChoiceStore).state;
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);

  protected readonly boxContents = GAME_BOX_CONTENTS;
  protected readonly boxes: GameBoxEnum[] = Object.values(GameBoxEnum);

  protected readonly loupGarouRole = PlayerRoleEnum.LOUP_GAROU;
  protected readonly villageoisRole = PlayerRoleEnum.VILLAGEOIS;

  protected readonly selectedRoles = computed<Set<PlayerRoleEnum>>(() => {
    const selection = this.rolesSelectionChange()?.source?.selected ?? [];
    return new Set(selection);
  });

  private readonly rolesSelection = new SelectionModel<PlayerRoleEnum>(true);
  private readonly rolesSelectionChange = toSignal(this.rolesSelection.changed);

  protected readonly requiredVillageois: Signal<number> = computed(() =>
    this.selectedRoles().has(PlayerRoleEnum.VOLEUR) ? 2 : 0,
  );

  protected readonly roleCountForm: FormGroup<RoleForm> =
    this.formBuilder.group({
      loupGarou: [0, Validators.min(0)],
      villageois: [0, Validators.min(this.requiredVillageois())],
    });

  private readonly roleCountFormChanges = toSignal(
    this.roleCountForm.valueChanges,
  );

  private readonly villageoisCount: Signal<number> = computed(
    () => this.roleCountFormChanges()?.villageois ?? 0,
  );
  private readonly loupGarouCount: Signal<number> = computed(
    () => this.roleCountFormChanges()?.loupGarou ?? 0,
  );

  protected readonly playersCount: Signal<number> = computed(
    () =>
      this.selectedRoles().size +
      this.villageoisCount() +
      this.loupGarouCount() +
      (this.selectedRoles().has(PlayerRoleEnum.SOEUR) ? 1 : 0) +
      (this.selectedRoles().has(PlayerRoleEnum.FRERE) ? 2 : 0) -
      (this.selectedRoles().has(PlayerRoleEnum.VOLEUR) ? 2 : 0),
  );

  ngOnInit(): void {
    Object.values(this.boxContents).forEach((roles) => {
      roles.sort((a, b) =>
        this.playerRoleNamePipe
          .transform(a)
          .localeCompare(this.playerRoleNamePipe.transform(b)),
      );
    });

    const cardList: CardList = this.cardChoiceState();
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
    this.cardChoiceState.set(cardList);
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
}
