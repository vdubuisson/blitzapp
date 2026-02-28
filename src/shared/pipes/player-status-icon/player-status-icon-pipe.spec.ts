import { PlayerStatusEnum } from '@/types/player-status';
import { PlayerStatusIconPipe } from './player-status-icon-pipe';
import { STATUS_ICONS } from './status-icons';

describe('PlayerStatusIconPipe', () => {
  let pipe: PlayerStatusIconPipe;

  beforeEach(() => {
    pipe = new PlayerStatusIconPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    const name = pipe.transform(PlayerStatusEnum.WOLF_TARGET);
    expect(name).toEqual(STATUS_ICONS[PlayerStatusEnum.WOLF_TARGET]);
  });
});
