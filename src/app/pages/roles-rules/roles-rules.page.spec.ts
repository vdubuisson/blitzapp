import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';
import { RolesRulesPage } from './roles-rules.page';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RolesRulesPage', () => {
  let page: RolesRulesPage;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(RolesRulesPage)
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
    page = MockRender(RolesRulesPage).point.componentInstance;
  });

  it('should create page', () => {
    expect(page).toBeTruthy();
  });
});
