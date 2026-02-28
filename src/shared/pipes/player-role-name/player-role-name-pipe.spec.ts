import { ROLE_NAMES } from '@/texts/role-names';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerRoleNamePipe } from './player-role-name-pipe';

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
    expect(name).toEqual(ROLE_NAMES[PlayerRoleEnum.VILLAGEOIS]);
  });
});
