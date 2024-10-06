import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { waitForAsync } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { Subject } from 'rxjs';
import { PlayerCardModalComponent } from '@/components/player-card-modal/player-card-modal.component';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  ngMocks.faster();

  beforeAll(() => MockBuilder(ModalService).mock(Dialog));

  beforeAll(() => {
    MockInstance(Dialog, () => ({
      open: () =>
        ({
          closed: new Subject().asObservable(),
        }) as DialogRef,
    }));
  });

  beforeAll(() => (service = MockRender(ModalService).point.componentInstance));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create PlayerCardModalComponent on showPlayerCard', waitForAsync(() => {
    const dialog = ngMocks.get(Dialog);

    service.showPlayerCard(PlayerRoleEnum.VILLAGEOIS).subscribe(() => {
      expect(dialog.open).toHaveBeenCalledWith(PlayerCardModalComponent, {
        data: PlayerRoleEnum.VILLAGEOIS,
      });
    });
  }));

  afterAll(MockReset);
});
