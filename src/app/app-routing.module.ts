import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cortes',
    pathMatch: 'full'
  },
  {
    path: 'cortes',
    loadChildren: () => import('./servicos/cortes/cortes.module').then( m => m.CortesPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./servicos/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./servicos/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'cortes-cadastros',
    loadChildren: () => import('./servicos/cortes-cadastros/cortes-cadastros.module').then( m => m.CortesCadastrosPageModule)
  },
  {
    path: 'clientes-cadastros',
    loadChildren: () => import('./servicos/clientes-cadastros/clientes-cadastros.module').then( m => m.ClientesCadastrosPageModule)
  },
  {
    path: 'agenda-cadastros',
    loadChildren: () => import('./servicos/agenda-cadastros/agenda-cadastros.module').then( m => m.AgendaCadastrosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
