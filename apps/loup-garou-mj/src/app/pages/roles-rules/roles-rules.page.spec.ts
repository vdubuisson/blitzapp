import { MockService } from 'ng-mocks';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { RolesRulesPage } from './roles-rules.page';

describe('RolesRulesPage', () => {
  let page: RolesRulesPage;
  let playerRoleNamePipe: PlayerRoleNamePipe;

  beforeEach(() => {
    playerRoleNamePipe = MockService(PlayerRoleNamePipe);
    jest.spyOn(playerRoleNamePipe, 'transform').mockReturnValue('');
    page = new RolesRulesPage(playerRoleNamePipe);
  });

  it('should create page', () => {
    expect(page).toBeTruthy();
  });
});
