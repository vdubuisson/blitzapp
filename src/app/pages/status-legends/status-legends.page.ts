import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionItemModule } from '@/shared/components/accordion-item/accordion-item-module';
import { PLAYER_STATUS_ORDER } from '@/config/player-status-order';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerStatusIconPipe } from '@/pipes/player-status-icon/player-status-icon.pipe';
import { PlayerStatusNamePipe } from '@/pipes/player-status-name/player-status-name.pipe';
import { STATUS_LEGENDS } from '@/values/status-legends';

@Component({
  selector: 'lgmj-status-legends',
  imports: [PlayerStatusIconPipe, PlayerStatusNamePipe, AccordionItemModule],
  templateUrl: './status-legends.page.html',
  styleUrls: ['./status-legends.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatusLegendsPage {
  protected readonly legends = STATUS_LEGENDS;
  protected readonly statuses: PlayerStatusEnum[] = Object.values(
    PlayerStatusEnum,
  ).toSorted(
    (status1, status2) =>
      PLAYER_STATUS_ORDER.indexOf(status1) -
      PLAYER_STATUS_ORDER.indexOf(status2),
  );
}
