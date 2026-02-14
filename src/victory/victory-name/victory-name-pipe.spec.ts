import { VICTORY_NAMES } from '@/texts/victory-names';
import { VictoryEnum } from '@/types/victory';
import { VictoryNamePipe } from './victory-name-pipe';

describe('VictoryNamePipe', () => {
  let pipe: VictoryNamePipe;

  beforeEach(() => {
    pipe = new VictoryNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested enum', () => {
    const name = pipe.transform(VictoryEnum.VILLAGEOIS);
    expect(name).toEqual(VICTORY_NAMES[VictoryEnum.VILLAGEOIS]);
  });
});
