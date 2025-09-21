import { GameBoxes } from '@/config/game-boxes';
import { GameBoxNamePipe } from './game-box-name-pipe';

jest.mock('@/texts/game-box-names', () => ({
  GAME_BOX_NAMES: { [GameBoxes.CORE]: 'Test' },
}));

describe('GameBoxNamePipe', () => {
  let pipe: GameBoxNamePipe;

  beforeEach(() => {
    pipe = new GameBoxNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    const name = pipe.transform(GameBoxes.CORE);
    expect(name).toEqual('Test');
  });
});
