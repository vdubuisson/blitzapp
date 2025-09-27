import { PlayerRoleModal } from '@/layout/modal/player-role/player-role-modal';
import { PlayerRole } from '@/types/player-role';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ModalManager } from './modal-manager';

describe('ModalManager', () => {
  let service: ModalManager;

  ngMocks.faster();

  beforeAll(() => MockBuilder(ModalManager).mock(Dialog));

  beforeAll(() => {
    MockInstance(Dialog, () => ({
      open: jest.fn().mockImplementation(
        () =>
          ({
            closed: new BehaviorSubject<void>(undefined).asObservable(),
          }) as DialogRef,
      ),
    }));
  });

  beforeAll(() => (service = MockRender(ModalManager).point.componentInstance));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create PlayerCardModalComponent on showPlayerCard', async () => {
    const dialog = ngMocks.get(Dialog);

    await firstValueFrom(service.showPlayerCard(PlayerRole.VILLAGEOIS));
    expect(dialog.open).toHaveBeenCalledWith(PlayerRoleModal, {
      data: PlayerRole.VILLAGEOIS,
    });
  });

  afterAll(MockReset);
});
