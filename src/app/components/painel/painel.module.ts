import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PaisService } from '../../services/pais.service'; // Importa o serviço de países do local correto
import { BrechoService } from '../../services/brecho.service'; // Importa o serviço de brechós do local correto

@NgModule({
  declarations: [
    PainelComponent // Declara o componente PainelComponent para uso dentro do módulo
  ],
  imports: [
    CommonModule // Importa CommonModule para utilizar diretivas comuns do Angular
  ],
  providers: [
    PaisService, // Provedor do serviço de países
    BrechoService // Provedor do serviço de brechós
  ]
})
export class PainelModule { }
