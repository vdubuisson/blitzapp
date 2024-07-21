import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerRoleImagePipe } from '@/pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerCardModalComponent {
  private readonly dialogRef = inject<DialogRef<void>>(DialogRef);
  protected readonly card = inject<PlayerRoleEnum>(DIALOG_DATA);

  continue() {
    this.dialogRef.close();
  }
}
