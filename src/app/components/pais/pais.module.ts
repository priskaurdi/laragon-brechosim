import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from '../painel/painel.component';
import { PaisRoutingModule } from './pais-routing.module';
import { PaisService } from '../../services/pais.service';
import { PaisComponent } from './pais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  imports: [
    CommonModule,
    PaisRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaisComponent
  ],
  providers:[
    PaisService
  ]
})
export class PaisModule { }

