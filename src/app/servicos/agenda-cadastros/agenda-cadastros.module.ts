import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCadastrosPageRoutingModule } from './agenda-cadastros-routing.module';

import { AgendaCadastrosPage } from './agenda-cadastros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgendaCadastrosPageRoutingModule
  ],
  declarations: [AgendaCadastrosPage]
})
export class AgendaCadastrosPageModule {}
