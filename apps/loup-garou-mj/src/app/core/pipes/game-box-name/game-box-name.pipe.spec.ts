import { GameBoxEnum } from '../../enums/game-box.enum';
import { GameBoxNamePipe } from './game-box-name.pipe';

describe('GameBoxNamePipe', () => {
  let pipe: GameBoxNamePipe;

  beforeEach(() => {
    pipe = new GameBoxNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display "Boite de base" for CORE', () => {
    const name = pipe.transform(GameBoxEnum.CORE);
    expect(name).toEqual('Boite de base');
  });

  it('should display "Extension - Nouvelle lune" for LUNE', () => {
    const name = pipe.transform(GameBoxEnum.LUNE);
    expect(name).toEqual('Extension - Nouvelle lune');
  });

  it('should display "Extension - Village" for VILLAGE', () => {
    const name = pipe.transform(GameBoxEnum.VILLAGE);
    expect(name).toEqual('Extension - Village');
  });

  it('should display "Extension - Personnages" for PERSONNAGES', () => {
    const name = pipe.transform(GameBoxEnum.PERSONNAGES);
    expect(name).toEqual('Extension - Personnages');
  });

  it('should display "Le Pacte" for PACTE', () => {
    const name = pipe.transform(GameBoxEnum.PACTE);
    expect(name).toEqual('Le Pacte');
  });
});
