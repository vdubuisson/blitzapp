import { SelectOverlayManager } from './select-overlay-manager';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { Subject } from 'rxjs';
import { SelectOverlayContent } from './select-overlay-content';
import { SelectOverlay } from './select-overlay';

describe('SelectOverlayComponent', () => {
  let component: SelectOverlay;
  let contentSubject: Subject<SelectOverlayContent>;

  ngMocks.faster();

  beforeAll(async () => {
    return MockBuilder(SelectOverlay).mock(SelectOverlayManager);
  });

  beforeAll(async () => {
    contentSubject = new Subject();
    MockInstance(SelectOverlayManager, () => ({
      content: contentSubject.asObservable(),
      selectValue: jest.fn(),
    }));
  });

  beforeAll(() => {
    component = MockRender(SelectOverlay).point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with isHidden set to true', () => {
    expect(component['isHidden']()).toBe(true);
  });

  it('should initialize with content set to undefined', () => {
    expect(component['content']()).toBeUndefined();
  });

  it('should update isHidden when content changes', async () => {
    const newContent: SelectOverlayContent = {
      header: 'header',
      options: [{ value: 'value', label: 'label' }],
    };
    contentSubject.next(newContent);

    expect(component['isHidden']()).toBe(false);
  });

  it('should update content when content changes', () => {
    const newContent: SelectOverlayContent = {
      header: 'header',
      options: [{ value: 'value', label: 'label' }],
    };
    contentSubject.next(newContent);
    expect(component['content']()).toEqual(newContent);
  });

  it('should call selectOverlayManager.selectValue when selectOption is called', () => {
    const service = ngMocks.get(SelectOverlayManager);
    const value = 'selected value';
    component['selectOption'](value);
    expect(service.selectValue).toHaveBeenCalledWith(value);
  });

  afterAll(MockReset);
});
