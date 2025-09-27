import { SelectOverlayContent } from '@/layout/select-overlay/select-overlay-content';
import { SelectOverlayManager } from './select-overlay-manager';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lgmj-select-overlay',
  standalone: true,
  templateUrl: './select-overlay.html',
  styleUrl: './select-overlay.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOverlay {
  private readonly selectOverlayManager = inject(SelectOverlayManager);

  protected readonly isHidden = signal(true);
  protected readonly content = signal<SelectOverlayContent | undefined>(
    undefined,
  );

  constructor() {
    this.selectOverlayManager.content
      .pipe(takeUntilDestroyed())
      .subscribe((content) => {
        this.content.set(content);
        this.isHidden.set(false);
      });
  }

  protected selectOption(value: string | undefined): void {
    this.selectOverlayManager.selectValue(value);
    this.isHidden.set(true);
  }
}
