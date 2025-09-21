import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { AnnouncementsQueueStore } from './announcements-queue-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('AnnouncementsQueueStore without storage', () => {
  let service: AnnouncementsQueueStore;
  const mockState = [
    {
      header: 'header',
      message: 'message',
      confirmText: 'confirmText',
    },
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(AnnouncementsQueueStore).mock(Storage));

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
      (service = MockRender(AnnouncementsQueueStore).point.componentInstance),
  );

  it('should init state with default value []', () => {
    expect(service.state()).toEqual([]);
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
  });

  it('should store new value to storage with storage key store.announcementsQueue', () => {
    service.state.set([]);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.announcementsQueue',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('AnnouncementsQueueStore with storage init', () => {
  let service: AnnouncementsQueueStore;

  const mockState = [
    {
      header: 'header',
      message: 'message',
      confirmText: 'confirmText',
    },
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(AnnouncementsQueueStore).mock(Storage));

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
      (service = MockRender(AnnouncementsQueueStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
