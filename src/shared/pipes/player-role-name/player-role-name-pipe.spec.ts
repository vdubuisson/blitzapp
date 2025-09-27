import { PlayerRole } from '@/types/player-role';
import { PlayerRoleNamePipe } from './player-role-name-pipe';

jest.mock('@/texts/role-names', () => ({
  ROLE_NAMES: { [PlayerRole.VILLAGEOIS]: 'Test' },
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
    const name = pipe.transform(PlayerRole.VILLAGEOIS);
    expect(name).toEqual('Test');
  });
});
