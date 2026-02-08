import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { RouterLink } from '@angular/router';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { MockDirective, MockPipe } from 'ng-mocks';
import { VictoryNamePipe } from './victory-name/victory-name-pipe';
import VictoryPage from './victory-page';

describe('VictoryPage', () => {
  let spectator: Spectator<VictoryPage>;

  const createComponent = createComponentFactory({
    component: VictoryPage,
    mocks: [NewGameCreator],
    imports: [MockDirective(RouterLink), MockPipe(VictoryNamePipe)],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should replay on replay button click', () => {
    const newGameCreator = spectator.inject(NewGameCreator);

    spectator.click(byTestId('replay-button'));

    expect(newGameCreator.replay).toHaveBeenCalled();
  });
});
