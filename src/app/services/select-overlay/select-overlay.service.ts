import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectOverlay } from '@/models/select-overlay.model';

@Injectable({
  providedIn: 'root',
})
export class SelectOverlayService {
  private readonly _content = new Subject<SelectOverlay>();
  private readonly _selectedValue = new Subject<string | undefined>();

  readonly content = this._content.asObservable();
  readonly selectedValue = this._selectedValue.asObservable();

  openOverlay(content: SelectOverlay): void {
    this._content.next(content);
  }

  selectValue(value: string | undefined): void {
    this._selectedValue.next(value);
  }
}
