import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { DayCountStore } from './day-count-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('DayCountStore without storage', () => {
  let service: DayCountStore;
  const mockState = 2;

  ngMocks.faster();

  beforeAll(() => MockBuilder(DayCountStore).mock(Storage));

  beforeAll(() => {
    MockInstance(
      Storage,
      () =>
        ({
          get: (_: string) => of(null),
          set: jest.fn(),
        }) as Partial<Storage>,
    );
  });

  beforeAll(
    () => (service = MockRender(DayCountStore).point.componentInstance),
  );

  it('should init state with default value 1', () => {
    expect(service.state()).toEqual(1);
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
  });

  it('should store new value to storage with storage key store.dayCount', () => {
    service.state.set(3);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.dayCount',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('DayCountStore with storage init', () => {
  let service: DayCountStore;

  const mockState = 2;

  ngMocks.faster();

  beforeAll(() => MockBuilder(DayCountStore).mock(Storage));

  beforeAll(() => {
    MockInstance(
      Storage,
      () =>
        ({
          get: (_: string) => of(mockState),
        }) as Partial<Storage>,
    );
  });

  beforeAll(
    () => (service = MockRender(DayCountStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
