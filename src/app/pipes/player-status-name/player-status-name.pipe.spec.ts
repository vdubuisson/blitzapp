import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerStatusNamePipe } from './player-status-name.pipe';

jest.mock('@/values/status-names', () => ({
  STATUS_NAMES: { [PlayerStatusEnum.WOLF_TARGET]: 'Test' },
}));

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
    expect(name).toEqual('Test');
  });
});
