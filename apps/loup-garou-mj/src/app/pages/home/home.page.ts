import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VictoryEnum } from '../../core/enums/victory.enum';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lgmj-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  victoryEnum = VictoryEnum.LOUP_GAROU;
}
