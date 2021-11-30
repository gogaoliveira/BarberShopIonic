import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesCadastrosPageRoutingModule } from './clientes-cadastros-routing.module';

import { ClientesCadastrosPage } from './clientes-cadastros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClientesCadastrosPageRoutingModule
  ],
  declarations: [ClientesCadastrosPage]
})
export class ClientesCadastrosPageModule {}
