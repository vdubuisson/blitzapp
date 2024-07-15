import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StorageService } from '@/services/storage/storage.service';
import { ModalService } from '@/services/modal/modal.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lgmj-options',
  standalone: true,
  templateUrl: './options.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsPage {
  private readonly storageService = inject(StorageService);
  private readonly modalService = inject(ModalService);

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
