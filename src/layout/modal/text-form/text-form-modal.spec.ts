import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';
import { TextFormModal } from './text-form-modal';

describe('TextFormModal', () => {
  let spectator: Spectator<TextFormModal>;

  const createComponent = createComponentFactory({
    component: TextFormModal,
    imports: [MockComponent(FaIconComponent), FormsModule],
    mocks: [DialogRef],
    componentProviders: [{ provide: DIALOG_DATA, useValue: {} }],
  });

  describe('with initialValue', () => {
    beforeEach(() => {
      spectator = createComponent({
        providers: [
          { provide: DIALOG_DATA, useValue: { initialValue: 'hello' } },
        ],
      });
    });

    it('should initialize formValue to initialValue when provided', () => {
      expect(spectator.component['formValue']).toBe('hello');
    });
  });

  describe('without initialValue', () => {
    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should initialize formValue to empty string when initialValue is not provided', () => {
      expect(spectator.component['formValue']).toBe('');
    });

    it('should close with undefined on close-icon click', () => {
      const closeIcon = spectator.query(byTestId('close-icon'));

      const dialogRef = spectator.inject(DialogRef);

      spectator.click(closeIcon!);

      expect(dialogRef.close).toHaveBeenCalledWith(undefined);
    });

    // it('should close with formValue on Enter key press', () => {
    //   const textInput = spectator.query(byTestId('text-input'));

    //   const dialogRef = spectator.inject(DialogRef);

    //   spectator.typeInElement('my text', textInput!);
    //   spectator.dispatchKeyboardEvent(textInput!, 'keydown', 'Enter');

    //   expect(dialogRef.close).toHaveBeenCalledWith('my text');
    // });

    it('should close with formValue on confirm button click', () => {
      const confirmButton = spectator.query(byTestId('confirm-button'));
      const textInput = spectator.query(byTestId('text-input'));

      const dialogRef = spectator.inject(DialogRef);

      spectator.typeInElement('my text', textInput!);
      spectator.click(confirmButton!);

      expect(dialogRef.close).toHaveBeenCalledWith('my text');
    });
  });
});
