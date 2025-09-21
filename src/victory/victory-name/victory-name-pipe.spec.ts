import { Victory } from '@/types/victory';
import { VictoryNamePipe } from './victory-name-pipe';

jest.mock('@/texts/victory-names', () => ({
  VICTORY_NAMES: { [Victory.VILLAGEOIS]: 'Test' },
}));

describe('VictoryNamePipe', () => {
  let pipe: VictoryNamePipe;

  beforeEach(() => {
    pipe = new VictoryNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    const name = pipe.transform(Victory.VILLAGEOIS);
    expect(name).toEqual('Test');
  });
});
