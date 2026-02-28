import { STATUS_NAMES } from '@/texts/status-names';
import { PlayerStatusEnum } from '@/types/player-status';
import { PlayerStatusNamePipe } from './player-status-name-pipe';

describe('PlayerStatusNamePipe', () => {
  let pipe: PlayerStatusNamePipe;

  beforeEach(() => {
    pipe = new PlayerStatusNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    const name = pipe.transform(PlayerStatusEnum.WOLF_TARGET);
    expect(name).toEqual(STATUS_NAMES[PlayerStatusEnum.WOLF_TARGET]);
  });
});
