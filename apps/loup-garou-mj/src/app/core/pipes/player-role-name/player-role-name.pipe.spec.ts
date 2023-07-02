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

  // it('should display "Voleur" for VOLEUR', () => {
  //   const name = pipe.transform(PlayerRoleEnum.VOLEUR);
  //   expect(name).toEqual('Voleur');
  // });

  it('should display "Voyante" for VOYANTE', () => {
    const name = pipe.transform(PlayerRoleEnum.VOYANTE);
    expect(name).toEqual('Voyante');
  });

  it('should display "Joueur de flûte" for JOUEUR_FLUTE', () => {
    const name = pipe.transform(PlayerRoleEnum.JOUEUR_FLUTE);
    expect(name).toEqual('Joueur de flûte');
  });

  it('should display "Corbeau" for CORBEAU', () => {
    const name = pipe.transform(PlayerRoleEnum.CORBEAU);
    expect(name).toEqual('Corbeau');
  });

  it('should display "Enfant sauvage" for ENFANT_SAUVAGE', () => {
    const name = pipe.transform(PlayerRoleEnum.ENFANT_SAUVAGE);
    expect(name).toEqual('Enfant sauvage');
  });

  it('should display "Salvateur" for SALVATEUR', () => {
    const name = pipe.transform(PlayerRoleEnum.SALVATEUR);
    expect(name).toEqual('Salvateur');
  });

  it('should display "Grand méchant loup" for GRAND_MECHANT_LOUP', () => {
    const name = pipe.transform(PlayerRoleEnum.GRAND_MECHANT_LOUP);
    expect(name).toEqual('Grand méchant loup');
  });

  it('should display "Montreur d\'ours" for MONTREUR_OURS', () => {
    const name = pipe.transform(PlayerRoleEnum.MONTREUR_OURS);
    expect(name).toEqual("Montreur d'ours");
  });

  it('should display "Renard" for RENARD', () => {
    const name = pipe.transform(PlayerRoleEnum.RENARD);
    expect(name).toEqual('Renard');
  });

  it('should display "Chien-Loup" for CHIEN_LOUP', () => {
    const name = pipe.transform(PlayerRoleEnum.CHIEN_LOUP);
    expect(name).toEqual('Chien-Loup');
  });

  it('should display "Sœur" for SOEUR', () => {
    const name = pipe.transform(PlayerRoleEnum.SOEUR);
    expect(name).toEqual('Sœur');
  });

  it('should display "Frère" for FRERE', () => {
    const name = pipe.transform(PlayerRoleEnum.FRERE);
    expect(name).toEqual('Frère');
  });
});
