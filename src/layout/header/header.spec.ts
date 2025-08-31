import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { Header } from './header';
import { ActivatedRoute, Router } from '@angular/router';
import { signal } from '@angular/core';
import { GameService } from '@/services/game/game.service';
import { provideLocationMocks } from '@angular/common/testing';

describe('Header', () => {
  MockInstance.scope();

  let component: Header;

  beforeEach(async () =>
    MockBuilder(Header)
      .provide(provideLocationMocks())
      .mock(ActivatedRoute)
      .keep(Router),
  );

  beforeEach(() => {
    MockInstance(GameService, () => ({
      isGameInProgress: signal(false),
    }));
  });

  it('should create', () => {
    component = MockRender(Header).point.componentInstance;
    expect(component).toBeTruthy();
  });
});
