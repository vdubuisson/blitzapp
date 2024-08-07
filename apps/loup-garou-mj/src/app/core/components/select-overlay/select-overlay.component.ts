import { Component } from '@angular/core';
import { SelectOverlayService } from '../../services/select-overlay/select-overlay.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SelectOverlay } from '../../models/select-overlay.model';

@Component({
  selector: 'lgmj-select-overlay',
  standalone: true,
  templateUrl: './select-overlay.component.html',
  styleUrl: './select-overlay.component.scss',
})
export class SelectOverlayComponent {
  isHidden = true;
  content?: SelectOverlay;

  constructor(private selectOverlayService: SelectOverlayService) {
    this.selectOverlayService.content
      .pipe(takeUntilDestroyed())
      .subscribe((content) => {
        this.content = content;
        this.isHidden = false;
      });
  }

  protected selectOption(value: string | undefined): void {
    this.selectOverlayService.selectValue(value);
    this.isHidden = true;
  }
}
