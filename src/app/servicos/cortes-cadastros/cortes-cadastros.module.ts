import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CortesCadastrosPageRoutingModule } from './cortes-cadastros-routing.module';

import { CortesCadastrosPage } from './cortes-cadastros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CortesCadastrosPageRoutingModule
  ],
  declarations: [CortesCadastrosPage]
})
export class CortesCadastrosPageModule {}
