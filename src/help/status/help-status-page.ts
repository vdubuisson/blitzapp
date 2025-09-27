import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionItemModule } from '@/shared/components/accordion-item/accordion-item-module';
import { PLAYER_STATUS_ORDER } from '@/config/player-status-order';
import { PlayerStatus } from '@/types/player-status';
import { PlayerStatusIconPipe } from '@/shared/pipes/player-status-icon/player-status-icon-pipe';
import { PlayerStatusNamePipe } from '@/shared/pipes/player-status-name/player-status-name-pipe';
import { STATUS_LEGENDS } from '@/texts/status-legends';

@Component({
  selector: 'lgmj-help-status-page',
  imports: [PlayerStatusIconPipe, PlayerStatusNamePipe, AccordionItemModule],
  templateUrl: './help-status-page.html',
  styleUrls: ['./help-status-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HelpStatusPage {
  protected readonly legends = STATUS_LEGENDS;
  protected readonly statuses: PlayerStatus[] = Object.values(
    PlayerStatus,
  ).toSorted(
    (status1, status2) =>
      PLAYER_STATUS_ORDER.indexOf(status1) -
      PLAYER_STATUS_ORDER.indexOf(status2),
  );
}
