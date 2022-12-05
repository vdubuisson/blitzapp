import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VictoryPage } from './victory.page';

const routes: Routes = [
  {
    path: '',
    component: VictoryPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VictoryPageRoutingModule {}
