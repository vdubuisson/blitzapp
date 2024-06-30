import { Component } from '@angular/core';
import { StorageService } from '../../core/services/storage/storage.service';
import { ModalService } from '../../core/services/modal/modal.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lgmj-options',
  standalone: true,
  imports: [],
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage {
  constructor(
    private storageService: StorageService,
    private modalService: ModalService,
  ) {}

  protected clear(): void {
    this.storageService
      .clear()
      .pipe(
        switchMap(() =>
          this.modalService.showTextModal({
            header: 'Stockage vidé',
            message: "Stockage vidé. Rechargez l'application.",
          }),
        ),
      )
      .subscribe();
  }
}
