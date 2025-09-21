import { PlayerRole } from '@/types/player-role';
import { PlayerRoleImagePipe } from './player-role-image-pipe';

describe('PlayerRoleImagePipe', () => {
  let pipe: PlayerRoleImagePipe;

  beforeEach(() => {
    pipe = new PlayerRoleImagePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return image path for role', () => {
    const path = pipe.transform(PlayerRole.VILLAGEOIS);
    expect(path).toEqual('images/roles/villageois.webp');
  });
});
