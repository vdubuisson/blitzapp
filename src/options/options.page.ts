import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Storage } from '@/storage/storage';
import { ModalManager } from '@/layout/modal/modal-manager';
import { switchMap } from 'rxjs';
import { AbstractStore } from '@/storage/abstract-store';

@Component({
  selector: 'lgmj-options',
  standalone: true,
  templateUrl: './options.page.html',
  styleUrl: './options.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OptionsPage {
  private readonly storage = inject(Storage);
  private readonly modalManager = inject(ModalManager);

  protected clearStores(): void {
    this.storage
      .clear(AbstractStore.STORAGE_KEY_PREFIX)
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
