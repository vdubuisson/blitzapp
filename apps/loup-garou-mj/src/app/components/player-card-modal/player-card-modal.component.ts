import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerRoleImagePipe } from '@/pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';

@Component({
  selector: 'lgmj-player-card-modal',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgOptimizedImage,
    PlayerRoleImagePipe,
    PlayerRoleNamePipe,
  ],
  templateUrl: './player-card-modal.component.html',
  styleUrls: ['./player-card-modal.component.scss'],
})
export class PlayerCardModalComponent {
  constructor(
    private dialogRef: DialogRef<void>,
    @Inject(DIALOG_DATA) public card: PlayerRoleEnum,
  ) {}

  continue() {
    this.dialogRef.close();
  }
}
