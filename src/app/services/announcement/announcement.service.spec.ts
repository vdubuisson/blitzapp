import { StorageService } from '@/services/storage/storage.service';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import { AnnouncementService } from './announcement.service';

describe('AnnouncementService', () => {
  let service: AnnouncementService;

  ngMocks.faster();

  beforeAll(() => MockBuilder(AnnouncementService).mock(StorageService));

  beforeAll(() => {
    MockInstance(StorageService, 'get', () => of(null));

    service = MockRender(AnnouncementService).point.componentInstance;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterAll(MockReset);
});
