import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RouterLink } from '@angular/router';
import { PlayerRoleImagePipe } from '../../pipes/player-role-image/player-role-image.pipe';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';

@Component({
  selector: 'lgmj-player-card-modal',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, NgOptimizedImage, PlayerRoleImagePipe, PlayerRoleNamePipe],
  templateUrl: './player-card-modal.component.html',
  styleUrls: ['./player-card-modal.component.scss'],
})
export class PlayerCardModalComponent {
  constructor(private modalCtrl: ModalController) {}

  card!: PlayerRoleEnum;

  continue() {
    this.modalCtrl.dismiss();
  }
}
