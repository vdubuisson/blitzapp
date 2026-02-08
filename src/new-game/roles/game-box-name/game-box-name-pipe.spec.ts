import { GameBoxEnum } from '@/config/game-boxes';
import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator/jest';
import { GameBoxNamePipe } from './game-box-name-pipe';

jest.mock('@/texts/game-box-names', () => ({
  GAME_BOX_NAMES: { [GameBoxEnum.CORE]: 'Test' },
}));

describe('GameBoxNamePipe', () => {
  let spectator: SpectatorPipe<GameBoxNamePipe>;
  const createPipe = createPipeFactory(GameBoxNamePipe);

  it('should create an instance', () => {
    spectator = createPipe(`{{ prop | gameBoxName }}`, {
      hostProps: {
        prop: GameBoxEnum.CORE,
      },
    });
    expect(spectator.element).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    spectator = createPipe(`{{ prop | gameBoxName }}`, {
      hostProps: {
        prop: GameBoxEnum.CORE,
      },
    });
    expect(spectator.element).toHaveText('Test');
  });
});
