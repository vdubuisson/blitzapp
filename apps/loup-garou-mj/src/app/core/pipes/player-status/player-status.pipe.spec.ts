import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { PlayerStatusPipe } from './player-status.pipe';

jest.mock('../../values/status-icons', () => ({
  STATUS_ICONS: { [PlayerStatusEnum.WOLF_TARGET]: 'Test' },
}));

describe('PlayerStatusPipe', () => {
  let pipe: PlayerStatusPipe;

  beforeEach(() => {
    pipe = new PlayerStatusPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    const name = pipe.transform(PlayerStatusEnum.WOLF_TARGET);
    expect(name).toEqual('Test');
  });
});
