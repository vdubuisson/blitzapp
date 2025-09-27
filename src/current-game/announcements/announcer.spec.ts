import { Storage } from '@/storage/storage';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import { Announcer } from './announcer';

describe('Announcer', () => {
  let service: Announcer;

  ngMocks.faster();

  beforeAll(() => MockBuilder(Announcer).mock(Storage));

  beforeAll(() => {
    MockInstance(Storage, 'get', () => of(null));

    service = MockRender(Announcer).point.componentInstance;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterAll(MockReset);
});
