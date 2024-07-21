import { SelectOverlay } from '@/models/select-overlay.model';
import { SelectOverlayService } from '@/services/select-overlay/select-overlay.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { Subject } from 'rxjs';
import { SelectOverlayComponent } from './select-overlay.component';

describe('SelectOverlayComponent', () => {
  let component: SelectOverlayComponent;
  let contentSubject: Subject<SelectOverlay>;

  ngMocks.faster();

  beforeAll(async () => {
    return MockBuilder(SelectOverlayComponent)
      .mock(SelectOverlayService)
      .provide(provideExperimentalZonelessChangeDetection());
  });

  beforeAll(async () => {
    contentSubject = new Subject();
    MockInstance(SelectOverlayService, () => ({
      content: contentSubject.asObservable(),
      selectValue: jest.fn(),
    }));
  });

  beforeAll(() => {
    component = MockRender(SelectOverlayComponent).point.componentInstance;
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
    const newContent: SelectOverlay = {
      header: 'header',
      options: [{ value: 'value', label: 'label' }],
    };
    contentSubject.next(newContent);

    expect(component['isHidden']()).toBe(false);
  });

  it('should update content when content changes', () => {
    const newContent: SelectOverlay = {
      header: 'header',
      options: [{ value: 'value', label: 'label' }],
    };
    contentSubject.next(newContent);
    expect(component['content']()).toEqual(newContent);
  });

  it('should call selectOverlayService.selectValue when selectOption is called', () => {
    const service = ngMocks.get(SelectOverlayService);
    const value = 'selected value';
    component['selectOption'](value);
    expect(service.selectValue).toHaveBeenCalledWith(value);
  });

  afterAll(MockReset);
});
