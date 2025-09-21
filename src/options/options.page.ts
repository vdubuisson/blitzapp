import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Storage } from '@/storage/storage';
import { ModalManager } from '@/layout/modal/modal-manager';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lgmj-options',
  standalone: true,
  templateUrl: './options.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OptionsPage {
  private readonly storage = inject(Storage);
  private readonly modalManager = inject(ModalManager);

  protected clear(): void {
    this.storage
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
