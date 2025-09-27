import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { Header } from './header';
import { ActivatedRoute, Router } from '@angular/router';
import { signal } from '@angular/core';
import { provideLocationMocks } from '@angular/common/testing';
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';

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
    MockInstance(GameOrchestrator, () => ({
      isGameInProgress: signal(false),
    }));
  });

  it('should create', () => {
    component = MockRender(Header).point.componentInstance;
    expect(component).toBeTruthy();
  });
});
