import { VictoryEnum } from '../../enums/victory.enum';
import { VictoryNamePipe } from './victory-name.pipe';

jest.mock('../../values/victory-names', () => ({
  VICTORY_NAMES: { [VictoryEnum.VILLAGEOIS]: 'Test' },
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
    const name = pipe.transform(VictoryEnum.VILLAGEOIS);
    expect(name).toEqual('Test');
  });
});
