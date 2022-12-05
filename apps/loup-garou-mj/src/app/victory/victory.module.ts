import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VictoryPageRoutingModule } from './victory-routing.module';

import { VictoryPage } from './victory.page';
import { VictoryNamePipe } from '../core/pipes/victory-name/victory-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VictoryPageRoutingModule,
    VictoryNamePipe,
  ],
  declarations: [VictoryPage],
})
export class VictoryPageModule {}
