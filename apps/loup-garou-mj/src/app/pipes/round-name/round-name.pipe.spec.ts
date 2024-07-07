import { RoundEnum } from '@/enums/round.enum';
import { RoundNamePipe } from './round-name.pipe';

jest.mock('@/values/round-names', () => ({
  ROUND_NAMES: { [RoundEnum.VILLAGEOIS]: 'Test' },
}));

describe('RoundNamePipe', () => {
  let pipe: RoundNamePipe;

  beforeEach(() => {
    pipe = new RoundNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display value for requested round', () => {
    const name = pipe.transform(RoundEnum.VILLAGEOIS);
    expect(name).toEqual('Test');
  });
});
