import { Component } from '@angular/core';
import { AccordionItemModule } from '@/components/accordion-item/accordion-item.module';
import { PLAYER_STATUS_ORDER_CONFIG } from '@/configs/player-status-order.config';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerStatusIconPipe } from '@/pipes/player-status-icon/player-status-icon.pipe';
import { PlayerStatusNamePipe } from '@/pipes/player-status-name/player-status-name.pipe';
import { STATUS_LEGENDS } from '@/values/status-legends';

@Component({
  selector: 'lgmj-status-legends',
  standalone: true,
  imports: [PlayerStatusIconPipe, PlayerStatusNamePipe, AccordionItemModule],
  templateUrl: './status-legends.page.html',
  styleUrls: ['./status-legends.page.scss'],
})
export class StatusLegendsPage {
  protected legends = STATUS_LEGENDS;
  protected statuses: PlayerStatusEnum[] = Object.values(PlayerStatusEnum).sort(
    (status1, status2) =>
      PLAYER_STATUS_ORDER_CONFIG.indexOf(status1) -
      PLAYER_STATUS_ORDER_CONFIG.indexOf(status2),
  );
}
