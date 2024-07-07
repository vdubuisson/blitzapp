import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerRoleNamePipe } from './player-role-name.pipe';

jest.mock('../../values/role-names', () => ({
  ROLE_NAMES: { [PlayerRoleEnum.VILLAGEOIS]: 'Test' },
}));

describe('PlayerRoleNamePipe', () => {
  let pipe: PlayerRoleNamePipe;

  beforeEach(() => {
    pipe = new PlayerRoleNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested role', () => {
    const name = pipe.transform(PlayerRoleEnum.VILLAGEOIS);
    expect(name).toEqual('Test');
  });
});
