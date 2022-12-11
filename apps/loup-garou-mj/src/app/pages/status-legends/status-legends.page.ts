import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../core/components/header/header.component';
import { PlayerStatusPipe } from '../../core/pipes/player-status/player-status.pipe';
import { PlayerStatusNamePipe } from '../../core/pipes/player-status-name/player-status-name.pipe';
import { STATUS_LEGENDS } from './legends/status-legends';
import { PlayerStatusEnum } from '../../core/enums/player-status.enum';
import { STATUS_TRACK_BY } from '../../core/utils/status.track-by';

@Component({
  selector: 'lgmj-status-legends',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    PlayerStatusPipe,
    PlayerStatusNamePipe,
    HeaderComponent,
  ],
  templateUrl: './status-legends.page.html',
  styleUrls: ['./status-legends.page.scss'],
})
export class StatusLegendsPage {
  protected legends = STATUS_LEGENDS;
  protected statuses = Object.values(PlayerStatusEnum);

  protected statusTrackBy = STATUS_TRACK_BY;
}
