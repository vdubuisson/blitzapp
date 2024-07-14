import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SelectOverlay } from '@/models/select-overlay.model';

@Injectable({
  providedIn: 'root',
})
export class SelectOverlayService {
  private _content = new Subject<SelectOverlay>();
  private _selectedValue = new Subject<string | undefined>();

  get content(): Observable<SelectOverlay> {
    return this._content.asObservable();
  }

  get selectedValue(): Observable<string | undefined> {
    return this._selectedValue.asObservable();
  }

  openOverlay(content: SelectOverlay): void {
    this._content.next(content);
  }

  selectValue(value: string | undefined): void {
    this._selectedValue.next(value);
  }
}
