import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { NeedCleanAfterBoucStore } from './need-clean-after-bouc-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('NeedCleanAfterBoucStore without storage', () => {
  let service: NeedCleanAfterBoucStore;
  const mockState = true;

  ngMocks.faster();

  beforeAll(() => MockBuilder(NeedCleanAfterBoucStore).mock(Storage));

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
    () =>
      (service = MockRender(NeedCleanAfterBoucStore).point.componentInstance),
  );

  it('should init state with default value false', () => {
    expect(service.state()).toEqual(false);
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
  });

  it('should store new value to storage with storage key store.needCleanAfterBouc', () => {
    service.state.set(false);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.needCleanAfterBouc',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('NeedCleanAfterBoucStore with storage init', () => {
  let service: NeedCleanAfterBoucStore;

  const mockState = true;

  ngMocks.faster();

  beforeAll(() => MockBuilder(NeedCleanAfterBoucStore).mock(Storage));

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
    () =>
      (service = MockRender(NeedCleanAfterBoucStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
