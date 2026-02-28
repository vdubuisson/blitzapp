import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';
import { TextModal } from './text-modal';

describe('TextModalComponent', () => {
  let spectator: Spectator<TextModal>;
  const createComponent = createComponentFactory({
    component: TextModal,
    imports: [MockComponent(FaIconComponent)],
    mocks: [DialogRef],
    componentProviders: [{ provide: DIALOG_DATA, useValue: {} }],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should dismiss with false on cancel', () => {
    spectator.component.close(false);

    const dialogRef = spectator.inject(DialogRef);

    expect(dialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should dismiss with true on confirm', () => {
    spectator.component.close(true);

    const dialogRef = spectator.inject(DialogRef);

    expect(dialogRef.close).toHaveBeenCalledWith(true);
  });
});
