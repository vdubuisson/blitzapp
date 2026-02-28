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
} from '@ngneat/spectator/vitest';
import { MockDirective, MockModule, MockPipes } from 'ng-mocks';
import HelpRolesPage from './help-roles-page';

describe('HelpRolesPage', () => {
  let spectator: Spectator<HelpRolesPage>;
  const createComponent = createComponentFactory({
    component: HelpRolesPage,
    imports: [
      ...MockPipes(PlayerRoleNamePipe, PlayerRoleImagePipe),
      MockDirective(NgOptimizedImage),
      MockModule(AccordionItemModule),
    ],
    componentProviders: [
      mockProvider(PlayerRoleNamePipe, {
        transform: (role: PlayerRole) => role.toString(),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
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
});
