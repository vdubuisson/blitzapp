import { waitForAsync } from '@angular/core/testing';

import { NewGamePage } from './new-game.page';

describe('NewGamePage', () => {
  let component: NewGamePage;

  beforeEach(waitForAsync(() => {
    component = new NewGamePage();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
