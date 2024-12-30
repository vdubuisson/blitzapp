import { NewGameService } from '@/services/new-game/new-game.service';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import VictoryPage from './victory.page';
import { VictoryEnum } from '@/enums/victory.enum';
import { provideLocationMocks } from '@angular/common/testing';

describe('VictoryPage', () => {
  let component: VictoryPage;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(VictoryPage)
      .mock(NewGameService)
      .provide(provideLocationMocks()),
  );

  beforeAll(() => {
    MockInstance(NewGameService, () => ({
      replay: jest.fn(),
    }));
  });

  beforeAll(() => {
    component = MockRender(VictoryPage, { victory: VictoryEnum.NONE }).point
      .componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should replay', () => {
    const newGameService = ngMocks.get(NewGameService);

    component['replay']();

    expect(newGameService.replay).toHaveBeenCalled();
  });

  afterAll(MockReset);
});
