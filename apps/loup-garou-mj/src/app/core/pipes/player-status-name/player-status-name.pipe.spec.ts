import { PlayerStatusNamePipe } from './player-status-name.pipe';

describe('PlayerStatusNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerStatusNamePipe();
    expect(pipe).toBeTruthy();
  });
});
