import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisRoutingModule } from './pais-routing.module'; // Importa o módulo de roteamento de países
import { PaisService } from '../../services/pais.service'; // Importa o serviço de países
import { PaisComponent } from './pais.component'; // Importa o componente de países
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa módulos de formulários

@NgModule({
  imports: [
    CommonModule, // Importa CommonModule para utilizar diretivas comuns do Angular
    PaisRoutingModule, // Importa o módulo de roteamento de países
    FormsModule, // Importa FormsModule para utilizar recursos de formulários no template
    ReactiveFormsModule // Importa ReactiveFormsModule para utilizar recursos de formulários reativos no template
  ],
  declarations: [
    PaisComponent // Declara o componente de países para uso dentro do módulo
  ],
  providers:[
    PaisService // Provedor do serviço de países
  ]
})
export class PaisModule { }
