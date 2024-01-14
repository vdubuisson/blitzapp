import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { PlayerStatusIconPipe } from './player-status-icon.pipe';

jest.mock('../../values/status-icons', () => ({
  STATUS_ICONS: { [PlayerStatusEnum.WOLF_TARGET]: 'Test' },
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
    const name = pipe.transform(PlayerStatusEnum.WOLF_TARGET);
    expect(name).toEqual('Test');
  });
});
