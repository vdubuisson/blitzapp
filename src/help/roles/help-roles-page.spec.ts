import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import HelpRolesPage from './help-roles-page';

describe('HelpRolesPage', () => {
  let page: HelpRolesPage;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(HelpRolesPage)
      .mock(PlayerRoleNamePipe)
      .beforeCompileComponents((testBed) =>
        testBed.configureTestingModule({
          schemas: [NO_ERRORS_SCHEMA],
        }),
      ),
  );

  beforeAll(() => {
    MockInstance(PlayerRoleNamePipe, () => ({
      transform: () => '',
    }));
  });

  beforeAll(() => {
    page = MockRender(HelpRolesPage).point.componentInstance;
  });

  it('should create page', () => {
    expect(page).toBeTruthy();
  });
});
