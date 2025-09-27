import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import VictoryPage from './victory-page';
import { Victory } from '@/types/victory';
import { provideLocationMocks } from '@angular/common/testing';

describe('VictoryPage', () => {
  let component: VictoryPage;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(VictoryPage)
      .mock(NewGameCreator)
      .provide(provideLocationMocks()),
  );

  beforeAll(() => {
    MockInstance(NewGameCreator, () => ({
      replay: jest.fn(),
    }));
  });

  beforeAll(() => {
    component = MockRender(VictoryPage, { victory: Victory.NONE }).point
      .componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should replay', () => {
    const newGameCreator = ngMocks.get(NewGameCreator);

    component['replay']();

    expect(newGameCreator.replay).toHaveBeenCalled();
  });

  afterAll(MockReset);
});
