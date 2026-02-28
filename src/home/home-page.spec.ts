import { RouterLink } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockDirective } from 'ng-mocks';
import HomePage from './home-page';

describe('HomePage', () => {
  let spectator: Spectator<HomePage>;
  const createComponent = createComponentFactory({
    component: HomePage,
    imports: [MockDirective(RouterLink)],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create page', () => {
    expect(spectator).toBeTruthy();
  });
});
