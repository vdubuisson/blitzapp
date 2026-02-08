import { ModalManager } from '@/layout/modal/modal-manager';
import { Storage } from '@/storage/storage';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import OptionsPage from './options.page';

describe('OptionsPage', () => {
  let spectator: Spectator<OptionsPage>;
  const createComponent = createComponentFactory({
    component: OptionsPage,
    mocks: [Storage, ModalManager],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should clear storage', () => {
    const storage = spectator.inject(Storage);
    storage.clear.mockReturnValue(of(undefined));

    spectator.click(byTestId('clear-button'));

    expect(storage.clear).toHaveBeenCalled();
  });
});
