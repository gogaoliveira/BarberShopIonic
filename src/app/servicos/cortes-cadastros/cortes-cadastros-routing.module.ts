import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CortesCadastrosPage } from './cortes-cadastros.page';

const routes: Routes = [
  {
    path: '',
    component: CortesCadastrosPage
  },
  {
    path: ':id',
    component: CortesCadastrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CortesCadastrosPageRoutingModule {}
