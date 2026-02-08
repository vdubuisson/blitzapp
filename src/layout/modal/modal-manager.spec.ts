import { PlayerRoleModal } from '@/layout/modal/player-role/player-role-modal';
import { PlayerRoleEnum } from '@/types/player-role';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { firstValueFrom, of } from 'rxjs';
import { ModalManager } from './modal-manager';

describe('ModalManager', () => {
  let spectator: SpectatorService<ModalManager>;
  const createService = createServiceFactory({
    service: ModalManager,
    mocks: [Dialog],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should create PlayerCardModalComponent on showPlayerCard', async () => {
    const dialog = spectator.inject(Dialog);
    dialog.open.mockReturnValue({
      closed: of(undefined),
    } as DialogRef);

    await firstValueFrom(
      spectator.service.showPlayerCard(PlayerRoleEnum.VILLAGEOIS),
    );
    expect(dialog.open).toHaveBeenCalledWith(PlayerRoleModal, {
      data: PlayerRoleEnum.VILLAGEOIS,
    });
  });
});
