import { SelectOverlay } from '@/models/select-overlay.model';
import { SelectOverlayService } from '@/services/select-overlay/select-overlay.service';
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
  templateUrl: './select-overlay.component.html',
  styleUrl: './select-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOverlayComponent {
  private readonly selectOverlayService = inject(SelectOverlayService);

  protected readonly isHidden = signal(true);
  protected readonly content = signal<SelectOverlay | undefined>(undefined);

  constructor() {
    this.selectOverlayService.content
      .pipe(takeUntilDestroyed())
      .subscribe((content) => {
        this.content.set(content);
        this.isHidden.set(false);
      });
  }

  protected selectOption(value: string | undefined): void {
    this.selectOverlayService.selectValue(value);
    this.isHidden.set(true);
  }
}
