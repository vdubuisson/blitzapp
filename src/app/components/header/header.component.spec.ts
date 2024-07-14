import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { HeaderComponent } from './header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { signal } from '@angular/core';
import { GameService } from '@/services/game/game.service';
import { provideLocationMocks } from '@angular/common/testing';

describe('HeaderComponent', () => {
  MockInstance.scope();

  let component: HeaderComponent;

  beforeEach(async () =>
    MockBuilder(HeaderComponent)
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
    component = MockRender(HeaderComponent).point.componentInstance;
    expect(component).toBeTruthy();
  });
});
