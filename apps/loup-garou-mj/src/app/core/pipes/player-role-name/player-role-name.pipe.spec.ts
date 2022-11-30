import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerRoleNamePipe } from './player-role-name.pipe';

describe('PlayerRoleNamePipe', () => {
  let pipe: PlayerRoleNamePipe;

  beforeEach(() => {
    pipe = new PlayerRoleNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display "Villageois" for VILLAGEOIS', () => {
    const name = pipe.transform(PlayerRoleEnum.VILLAGEOIS);
    expect(name).toEqual('Villageois');
  });

  it('should display "Loup-Garou" for LOUP_GAROU', () => {
    const name = pipe.transform(PlayerRoleEnum.LOUP_GAROU);
    expect(name).toEqual('Loup-Garou');
  });

  it('should display "Chasseur" for CHASSEUR', () => {
    const name = pipe.transform(PlayerRoleEnum.CHASSEUR);
    expect(name).toEqual('Chasseur');
  });

  it('should display "Cupidon" for CUPIDON', () => {
    const name = pipe.transform(PlayerRoleEnum.CUPIDON);
    expect(name).toEqual('Cupidon');
  });

  it('should display "Petite fille" for PETITE_FILLE', () => {
    const name = pipe.transform(PlayerRoleEnum.PETITE_FILLE);
    expect(name).toEqual('Petite fille');
  });

  it('should display "Sorcière" for SORCIERE', () => {
    const name = pipe.transform(PlayerRoleEnum.SORCIERE);
    expect(name).toEqual('Sorcière');
  });

  it('should display "Voleur" for VOLEUR', () => {
    const name = pipe.transform(PlayerRoleEnum.VOLEUR);
    expect(name).toEqual('Voleur');
  });

  it('should display "Voyante" for VOYANTE', () => {
    const name = pipe.transform(PlayerRoleEnum.VOYANTE);
    expect(name).toEqual('Voyante');
  });
});
