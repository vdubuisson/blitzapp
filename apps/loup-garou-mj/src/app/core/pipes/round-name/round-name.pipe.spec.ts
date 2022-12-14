import { RoundEnum } from '../../enums/round.enum';
import { RoundNamePipe } from './round-name.pipe';

describe('RoundNamePipe', () => {
  let pipe: RoundNamePipe;

  beforeEach(() => {
    pipe = new RoundNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display "Choix du voleur" for VOLEUR', () => {
    const name = pipe.transform(RoundEnum.VOLEUR);
    expect(name).toEqual('Choix du voleur');
  });

  it('should display "Tir de Cupidon" for CUPIDON', () => {
    const name = pipe.transform(RoundEnum.CUPIDON);
    expect(name).toEqual('Tir de Cupidon');
  });

  it('should display "Vision de la voyante" for VOYANTE', () => {
    const name = pipe.transform(RoundEnum.VOYANTE);
    expect(name).toEqual('Vision de la voyante');
  });

  it('should display "Découverte des amoureux" for AMOUREUX', () => {
    const name = pipe.transform(RoundEnum.AMOUREUX);
    expect(name).toEqual('Découverte des amoureux');
  });

  it('should display "Attaque des loups-garous" for LOUP_GAROU', () => {
    const name = pipe.transform(RoundEnum.LOUP_GAROU);
    expect(name).toEqual('Attaque des loups-garous');
  });

  it('should display "Soin de la sorcière" for SORCIERE_HEALTH', () => {
    const name = pipe.transform(RoundEnum.SORCIERE_HEALTH);
    expect(name).toEqual('Soin de la sorcière');
  });

  it('should display "Potion de mort de la sorcière" for SORCIERE_KILL', () => {
    const name = pipe.transform(RoundEnum.SORCIERE_KILL);
    expect(name).toEqual('Potion de mort de la sorcière');
  });

  it('should display "Vote des villageois" for VILLAGEOIS', () => {
    const name = pipe.transform(RoundEnum.VILLAGEOIS);
    expect(name).toEqual('Vote des villageois');
  });

  it('should display "Election du capitaine" for CAPITAINE', () => {
    const name = pipe.transform(RoundEnum.CAPITAINE);
    expect(name).toEqual('Election du capitaine');
  });

  it('should display "Tir du chasseur" for CHASSEUR', () => {
    const name = pipe.transform(RoundEnum.CHASSEUR);
    expect(name).toEqual('Tir du chasseur');
  });

  it('should display "Charme du joueur de flûte" for JOUEUR_FLUTE', () => {
    const name = pipe.transform(RoundEnum.JOUEUR_FLUTE);
    expect(name).toEqual('Charme du joueur de flûte');
  });

  it('should display "Découverte des charmés" for CHARMED', () => {
    const name = pipe.transform(RoundEnum.CHARMED);
    expect(name).toEqual('Découverte des charmés');
  });

  it('should display "Accusation du corbeau" for CORBEAU', () => {
    const name = pipe.transform(RoundEnum.CORBEAU);
    expect(name).toEqual('Accusation du corbeau');
  });
});
