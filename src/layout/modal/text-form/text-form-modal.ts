import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { TextFormModalData } from './text-form-modal-data';

@Component({
  selector: 'lgmj-text-form-modal',
  imports: [FaIconComponent, FormsModule],
  templateUrl: './text-form-modal.html',
  styleUrl: './text-form-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFormModal {
  private readonly dialogRef = inject<DialogRef<string>>(DialogRef);
  protected readonly data = inject<TextFormModalData>(DIALOG_DATA);

  protected readonly closeIcon = faXmark;

  protected formValue = this.data.initialValue ?? '';

  protected close(confirm = false) {
    this.dialogRef.close(confirm ? this.formValue : undefined);
  }
}
