import { PlayerCardModalComponent } from '@/components/player-card-modal/player-card-modal.component';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  ngMocks.faster();

  beforeAll(() => MockBuilder(ModalService).mock(Dialog));

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

  beforeAll(() => (service = MockRender(ModalService).point.componentInstance));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create PlayerCardModalComponent on showPlayerCard', async () => {
    const dialog = ngMocks.get(Dialog);

    await firstValueFrom(service.showPlayerCard(PlayerRoleEnum.VILLAGEOIS));
    expect(dialog.open).toHaveBeenCalledWith(PlayerCardModalComponent, {
      data: PlayerRoleEnum.VILLAGEOIS,
    });
  });

  afterAll(MockReset);
});
