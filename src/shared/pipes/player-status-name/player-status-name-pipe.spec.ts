import { PlayerStatus } from '@/types/player-status';
import { PlayerStatusNamePipe } from './player-status-name-pipe';

jest.mock('@/texts/status-names', () => ({
  STATUS_NAMES: { [PlayerStatus.WOLF_TARGET]: 'Test' },
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
    const name = pipe.transform(PlayerStatus.WOLF_TARGET);
    expect(name).toEqual('Test');
  });
});
