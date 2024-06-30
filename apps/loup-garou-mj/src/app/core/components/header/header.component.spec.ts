import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { HeaderComponent } from './header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game/game.service';
import { signal } from '@angular/core';

describe('HeaderComponent', () => {
  MockInstance.scope();

  let component: HeaderComponent;

  beforeEach(async () =>
    MockBuilder(HeaderComponent).mock(ActivatedRoute).keep(Router),
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
