import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaCadastrosPage } from './agenda-cadastros.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaCadastrosPage
  },
  {
    path: ':id',
    component: AgendaCadastrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaCadastrosPageRoutingModule {}
