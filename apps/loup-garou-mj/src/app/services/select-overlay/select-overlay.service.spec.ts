import { TestBed } from '@angular/core/testing';

import { SelectOverlayService } from './select-overlay.service';

describe('SelectOverlayService', () => {
  let service: SelectOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
