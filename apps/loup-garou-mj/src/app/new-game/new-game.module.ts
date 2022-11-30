import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGamePageRoutingModule } from './new-game-routing.module';

import { NewGamePage } from './new-game.page';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { PlayerRoleNamePipe } from '../core/pipes/player-role-name/player-role-name.pipe';
import { PlayerComponent } from '../core/components/player/player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewGamePageRoutingModule,
    PlayerRoleNamePipe,
    PlayerComponent,
  ],
  declarations: [NewGamePage, NewPlayerComponent],
})
export class NewGamePageModule {}
