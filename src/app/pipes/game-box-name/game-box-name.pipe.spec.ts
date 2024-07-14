import { GameBoxEnum } from '@/enums/game-box.enum';
import { GameBoxNamePipe } from './game-box-name.pipe';

jest.mock('@/values/game-box-names', () => ({
  GAME_BOX_NAMES: { [GameBoxEnum.CORE]: 'Test' },
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
    const name = pipe.transform(GameBoxEnum.CORE);
    expect(name).toEqual('Test');
  });
});
