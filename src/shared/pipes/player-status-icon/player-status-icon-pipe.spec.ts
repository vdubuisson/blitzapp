import { PlayerStatus } from '@/types/player-status';
import { PlayerStatusIconPipe } from './player-status-icon-pipe';

jest.mock('./status-icons', () => ({
  STATUS_ICONS: { [PlayerStatus.WOLF_TARGET]: 'Test' },
}));

describe('PlayerStatusIconPipe', () => {
  let pipe: PlayerStatusIconPipe;

  beforeEach(() => {
    pipe = new PlayerStatusIconPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    const name = pipe.transform(PlayerStatus.WOLF_TARGET);
    expect(name).toEqual('Test');
  });
});
