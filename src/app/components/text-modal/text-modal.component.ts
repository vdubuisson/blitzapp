import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TextModalData } from '@/models/text-modal-data.model';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lgmj-text-modal',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './text-modal.component.html',
  styleUrl: './text-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextModalComponent {
  private readonly dialogRef = inject<DialogRef<boolean>>(DialogRef);
  protected readonly data = inject<TextModalData>(DIALOG_DATA);

  protected readonly closeIcon = faXmark;

  close(confirm = false) {
    this.dialogRef.close(confirm);
  }
}
