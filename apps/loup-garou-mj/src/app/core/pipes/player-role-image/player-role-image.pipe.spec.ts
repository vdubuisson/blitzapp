import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerRoleImagePipe } from './player-role-image.pipe';

describe('PlayerRoleImagePipe', () => {
  let pipe: PlayerRoleImagePipe;

  beforeEach(() => {
    pipe = new PlayerRoleImagePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return image path for VILLAGEOIS', () => {
    const path = pipe.transform(PlayerRoleEnum.VILLAGEOIS);
    expect(path).toEqual('assets/images/roles/villageois.webp');
  });

  it('should return image path for LOUP_GAROU', () => {
    const path = pipe.transform(PlayerRoleEnum.LOUP_GAROU);
    expect(path).toEqual('assets/images/roles/loup_garou.webp');
  });

  it('should return image path for CHASSEUR', () => {
    const path = pipe.transform(PlayerRoleEnum.CHASSEUR);
    expect(path).toEqual('assets/images/roles/chasseur.webp');
  });

  it('should return image path for CUPIDON', () => {
    const path = pipe.transform(PlayerRoleEnum.CUPIDON);
    expect(path).toEqual('assets/images/roles/cupidon.webp');
  });

  it('should return image path for PETITE_FILLE', () => {
    const path = pipe.transform(PlayerRoleEnum.PETITE_FILLE);
    expect(path).toEqual('assets/images/roles/petite_fille.webp');
  });

  it('should return image path for SORCIERE', () => {
    const path = pipe.transform(PlayerRoleEnum.SORCIERE);
    expect(path).toEqual('assets/images/roles/sorciere.webp');
  });

  it('should return image path for VOLEUR', () => {
    const path = pipe.transform(PlayerRoleEnum.VOLEUR);
    expect(path).toEqual('assets/images/roles/voleur.webp');
  });

  it('should return image path for VOYANTE', () => {
    const path = pipe.transform(PlayerRoleEnum.VOYANTE);
    expect(path).toEqual('assets/images/roles/voyante.webp');
  });
});
