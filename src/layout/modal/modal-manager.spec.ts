import { PlayerRoleModal } from '@/layout/modal/player-role/player-role-modal';
import { PlayerRoleEnum } from '@/types/player-role';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import {
  createServiceFactory,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { firstValueFrom, of } from 'rxjs';
import { ModalManager } from './modal-manager';
import { TextModal } from './text/text-modal';
import { TextFormModal } from './text-form/text-form-modal';

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

  describe('showPlayerCard', () => {
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

  describe('showTextModal', () => {
    it('should open TextModal with correct data on showTextModal', async () => {
      const dialog = spectator.inject(Dialog);
      dialog.open.mockReturnValue({ closed: of(true) } as DialogRef);

      await firstValueFrom(
        spectator.service.showTextModal({ header: 'Test', message: 'Hello' }),
      );
      expect(dialog.open).toHaveBeenCalledWith(TextModal, {
        data: { header: 'Test', message: 'Hello' },
      });
    });

    it('should emit true when TextModal closes with true', async () => {
      const dialog = spectator.inject(Dialog);
      dialog.open.mockReturnValue({ closed: of(true) } as DialogRef);

      const result = await firstValueFrom(
        spectator.service.showTextModal({ header: 'Test', message: 'Hello' }),
      );
      expect(result).toBe(true);
    });

    it('should emit false when TextModal closes with false', async () => {
      const dialog = spectator.inject(Dialog);
      dialog.open.mockReturnValue({ closed: of(false) } as DialogRef);

      const result = await firstValueFrom(
        spectator.service.showTextModal({ header: 'Test', message: 'Hello' }),
      );
      expect(result).toBe(false);
    });

    it('should emit false when TextModal closes with undefined', async () => {
      const dialog = spectator.inject(Dialog);
      dialog.open.mockReturnValue({ closed: of(undefined) } as DialogRef);

      const result = await firstValueFrom(
        spectator.service.showTextModal({ header: 'Test', message: 'Hello' }),
      );
      expect(result).toBe(false);
    });
  });

  describe('showTextFormModal', () => {
    it('should open TextFormModal with correct data on showTextFormModal', async () => {
      const dialog = spectator.inject(Dialog);
      dialog.open.mockReturnValue({ closed: of('some input') } as DialogRef);

      await firstValueFrom(
        spectator.service.showTextFormModal({
          header: 'Form',
          initialValue: 'Enter text',
        }),
      );
      expect(dialog.open).toHaveBeenCalledWith(TextFormModal, {
        data: { header: 'Form', initialValue: 'Enter text' },
      });
    });

    it('should emit the string value when TextFormModal closes with a string', async () => {
      const dialog = spectator.inject(Dialog);
      dialog.open.mockReturnValue({ closed: of('user input') } as DialogRef);

      const result = await firstValueFrom(
        spectator.service.showTextFormModal({
          header: 'Form',
          initialValue: 'Enter text',
        }),
      );
      expect(result).toBe('user input');
    });

    it('should emit undefined when TextFormModal closes with undefined', async () => {
      const dialog = spectator.inject(Dialog);
      dialog.open.mockReturnValue({ closed: of(undefined) } as DialogRef);

      const result = await firstValueFrom(
        spectator.service.showTextFormModal({
          header: 'Form',
          initialValue: 'Enter text',
        }),
      );
      expect(result).toBeUndefined();
    });
  });
});
