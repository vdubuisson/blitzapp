import { TestBed } from '@angular/core/testing';

import { SelectOverlayManager } from './select-overlay-manager';

describe('SelectOverlayManager', () => {
  let service: SelectOverlayManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectOverlayManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
