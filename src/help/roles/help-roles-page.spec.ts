import { AccordionItemModule } from '@/shared/components/accordion-item/accordion-item-module';
import { PlayerRoleImagePipe } from '@/shared/pipes/player-role-image/player-role-image-pipe';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { PlayerRole, PlayerRoleEnum } from '@/shared/types/player-role';
import { NgOptimizedImage } from '@angular/common';
import { mockProvider } from '@ngneat/spectator';
import {
  byTestId,
  createComponentFactory,
  Spectator,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockDirective, MockModule, MockPipes } from 'ng-mocks';
import HelpRolesPage from './help-roles-page';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ModalManager } from '@/layout/modal/modal-manager';
import { of } from 'rxjs';

describe('HelpRolesPage', () => {
  let spectator: Spectator<HelpRolesPage>;

  let modalManager: SpyObject<ModalManager>;

  const createComponent = createComponentFactory({
    component: HelpRolesPage,
    imports: [
      ...MockPipes(PlayerRoleNamePipe, PlayerRoleImagePipe),
      MockDirective(NgOptimizedImage),
      MockModule(AccordionItemModule),
      MockComponent(FaIconComponent),
    ],
    componentProviders: [
      mockProvider(PlayerRoleNamePipe, {
        transform: (role: PlayerRole) => role.toString(),
      }),
    ],
    mocks: [ModalManager],
  });

  beforeEach(() => {
    spectator = createComponent();
    modalManager = spectator.inject(ModalManager);
    modalManager.showPlayerCard.mockReturnValue(of(undefined));
  });

  it('should create page', () => {
    expect(spectator).toBeTruthy();
  });

  it('should display an accordion item for each role', () => {
    const accordionItems = spectator.queryAll(byTestId('accordion-item'));
    const expectedLength = Object.values(PlayerRoleEnum).filter(
      (role) => role !== PlayerRoleEnum.NOT_SELECTED,
    ).length;

    expect(accordionItems.length).toBe(expectedLength);
  });

  it('should show role card when clicking on expand icon', () => {
    const expandBtn = spectator.query(byTestId('expand-btn'));

    spectator.click(expandBtn!);

    expect(modalManager.showPlayerCard).toHaveBeenCalledWith(
      spectator.component['roles'][0],
    );
  });
});
