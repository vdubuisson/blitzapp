import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/vitest';
import { Subject } from 'rxjs';
import { SelectOverlay } from './select-overlay';
import { SelectOverlayContent } from './select-overlay-content';
import { SelectOverlayManager } from './select-overlay-manager';

describe('SelectOverlayComponent', () => {
  let spectator: Spectator<SelectOverlay>;
  let contentSubject: Subject<SelectOverlayContent>;
  const createComponent = createComponentFactory({
    component: SelectOverlay,
  });

  beforeEach(() => {
    contentSubject = new Subject<SelectOverlayContent>();
    spectator = createComponent({
      providers: [
        mockProvider(SelectOverlayManager, {
          content: contentSubject.asObservable(),
          selectValue: vi.fn(),
        }),
      ],
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should initialize with isHidden set to true', () => {
    expect(spectator.component['isHidden']()).toBe(true);
  });

  it('should initialize with content set to undefined', () => {
    expect(spectator.component['content']()).toBeUndefined();
  });

  it('should update isHidden when content changes', async () => {
    const newContent: SelectOverlayContent = {
      header: 'header',
      options: [{ value: 'value', label: 'label' }],
    };
    contentSubject.next(newContent);

    expect(spectator.component['isHidden']()).toBe(false);
  });

  it('should update content when content changes', () => {
    const newContent: SelectOverlayContent = {
      header: 'header',
      options: [{ value: 'value', label: 'label' }],
    };
    contentSubject.next(newContent);
    expect(spectator.component['content']()).toEqual(newContent);
  });

  it('should call selectOverlayManager.selectValue when selectOption is called', () => {
    const service = spectator.inject(SelectOverlayManager);
    const value = 'selected value';
    spectator.component['selectOption'](value);
    expect(service.selectValue).toHaveBeenCalledWith(value);
  });
});
