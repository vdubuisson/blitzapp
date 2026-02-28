import { RoundEnum } from '@/types/round';
import { RoundNamePipe } from './round-name-pipe';
import { ROUND_NAMES } from '@/texts/round-names';

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
    expect(name).toEqual(ROUND_NAMES[RoundEnum.VILLAGEOIS]);
  });
});
