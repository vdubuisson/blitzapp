import { PlayerRoleImagePipe } from '@/shared/pipes/player-role-image/player-role-image-pipe';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockDirective, MockPipes } from 'ng-mocks';
import { PlayerRoleModal } from './player-role-modal';

describe('PlayerRoleModal', () => {
  let spectator: Spectator<PlayerRoleModal>;
  const createComponent = createComponentFactory({
    component: PlayerRoleModal,
    imports: [
      MockDirective(NgOptimizedImage),
      ...MockPipes(UpperCasePipe, PlayerRoleImagePipe, PlayerRoleNamePipe),
    ],
    mocks: [DialogRef],
    componentProviders: [{ provide: DIALOG_DATA, useValue: {} }],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should dismiss on continue', () => {
    spectator.component.continue();

    const dialogRef = spectator.inject(DialogRef);

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
