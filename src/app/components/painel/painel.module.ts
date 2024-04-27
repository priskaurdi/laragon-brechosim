import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PaisService } from 'src/app/services/pais.service.ts';
import { BrechoService } from 'src/app/services/brecho.service.ts';


@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PaisService,
    BrechoService
  ]
})
export class PainelModule { }

