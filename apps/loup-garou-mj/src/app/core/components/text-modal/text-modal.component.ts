import { Component, Inject } from '@angular/core';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { TextModalData } from '../../models/text-modal-data.model';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'lgmj-text-modal',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './text-modal.component.html',
  styleUrl: './text-modal.component.scss',
})
export class TextModalComponent {
  protected readonly closeIcon = faXmark;

  constructor(
    private dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: TextModalData,
  ) {}

  close(confirm = false) {
    this.dialogRef.close(confirm);
  }
}
