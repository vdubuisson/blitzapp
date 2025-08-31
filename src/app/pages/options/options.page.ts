import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StorageService } from '@/services/storage/storage.service';
import { ModalManager } from '@/layout/modal/modal-manager';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lgmj-options',
  standalone: true,
  templateUrl: './options.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OptionsPage {
  private readonly storageService = inject(StorageService);
  private readonly modalManager = inject(ModalManager);

  protected clear(): void {
    this.storageService
      .clear()
      .pipe(
        switchMap(() =>
          this.modalManager.showTextModal({
            header: 'Stockage vidé',
            message: "Stockage vidé. Rechargez l'application.",
          }),
        ),
      )
      .subscribe();
  }
}
