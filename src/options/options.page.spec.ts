import { ModalManager } from '@/layout/modal/modal-manager';
import { Storage } from '@/storage/storage';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import OptionsPage from './options.page';
import { AbstractStore } from '@/storage/abstract-store';

describe('OptionsPage', () => {
  let spectator: Spectator<OptionsPage>;
  const createComponent = createComponentFactory({
    component: OptionsPage,
    mocks: [Storage, ModalManager],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should clear stores', () => {
    const modalManager = spectator.inject(ModalManager);
    modalManager.showTextModal.mockReturnValue(of(true));
    const storage = spectator.inject(Storage);
    storage.clear.mockReturnValue(of(undefined));

    spectator.click(byTestId('clear-button'));

    expect(storage.clear).toHaveBeenCalledWith(
      AbstractStore.STORAGE_KEY_PREFIX,
    );
  });
});
