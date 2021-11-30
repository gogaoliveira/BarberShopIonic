import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesCadastrosPage } from './clientes-cadastros.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesCadastrosPage
  },
  {
    path:':id',
    component: ClientesCadastrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesCadastrosPageRoutingModule {}
