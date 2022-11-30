import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { PlayerComponent } from '../components/player/player.component';
import { RoundNamePipe } from '../pipes/round-name/round-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    PlayerComponent,
    RoundNamePipe,
  ],
  declarations: [GamePage],
})
export class GamePageModule {}