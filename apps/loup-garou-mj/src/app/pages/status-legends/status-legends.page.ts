import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { PlayerStatusIconPipe } from '../../core/pipes/player-status-icon/player-status-icon.pipe';
import { PlayerStatusNamePipe } from '../../core/pipes/player-status-name/player-status-name.pipe';
import { STATUS_LEGENDS } from '../../core/values/status-legends';
import { PlayerStatusEnum } from '../../core/enums/player-status.enum';
import { STATUS_TRACK_BY } from '../../core/utils/status.track-by';
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-status-legends',
  standalone: true,
  imports: [
    CommonModule,
    PlayerStatusIconPipe,
    PlayerStatusNamePipe,
    HeaderComponent,
    IonContent,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
  ],
  templateUrl: './status-legends.page.html',
  styleUrls: ['./status-legends.page.scss'],
})
export class StatusLegendsPage {
  protected legends = STATUS_LEGENDS;
  protected statuses: PlayerStatusEnum[] = Object.values(PlayerStatusEnum);

  protected statusTrackBy = STATUS_TRACK_BY;
}
