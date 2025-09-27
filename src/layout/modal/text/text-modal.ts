import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TextModalData } from '@/layout/modal/text/text-modal-data';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lgmj-text-modal',
  imports: [FaIconComponent],
  templateUrl: './text-modal.html',
  styleUrl: './text-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextModal {
  private readonly dialogRef = inject<DialogRef<boolean>>(DialogRef);
  protected readonly data = inject<TextModalData>(DIALOG_DATA);

  protected readonly closeIcon = faXmark;

  close(confirm = false) {
    this.dialogRef.close(confirm);
  }
}
