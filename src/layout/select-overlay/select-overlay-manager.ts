import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectOverlayContent } from '@/layout/select-overlay/select-overlay-content';

@Injectable({
  providedIn: 'root',
})
export class SelectOverlayManager {
  private readonly _content = new Subject<SelectOverlayContent>();
  private readonly _selectedValue = new Subject<string | undefined>();

  readonly content = this._content.asObservable();
  readonly selectedValue = this._selectedValue.asObservable();

  /**
   * Opens the overlay with the specified content.
   *
   * @param content - The content to display in the overlay.
   */
  openOverlay(content: SelectOverlayContent): void {
    this._content.next(content);
  }

  /**
   * Select a value in the overlay.
   *
   * @param value - The selected value.
   */
  selectValue(value: string | undefined): void {
    this._selectedValue.next(value);
  }
}
