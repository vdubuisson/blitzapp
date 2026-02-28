import { AccordionItemModule } from '@/shared/components/accordion-item/accordion-item-module';
import { PlayerStatusIconPipe } from '@/shared/pipes/player-status-icon/player-status-icon-pipe';
import { PlayerStatusNamePipe } from '@/shared/pipes/player-status-name/player-status-name-pipe';
import { PlayerStatusEnum } from '@/shared/types/player-status';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/vitest';
import { MockModule, MockPipes } from 'ng-mocks';
import HelpStatusPage from './help-status-page';

describe('HelpStatusPage', () => {
  let spectator: Spectator<HelpStatusPage>;
  const createComponent = createComponentFactory({
    component: HelpStatusPage,
    imports: [
      ...MockPipes(PlayerStatusIconPipe, PlayerStatusNamePipe),
      MockModule(AccordionItemModule),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create page', () => {
    expect(spectator).toBeTruthy();
  });

  it('should display an accordion item for each status', () => {
    const accordionItems = spectator.queryAll(byTestId('accordion-item'));
    const expectedLength = Object.values(PlayerStatusEnum).length;

    expect(accordionItems.length).toBe(expectedLength);
  });
});
