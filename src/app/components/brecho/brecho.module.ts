import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrechoComponent } from './brecho.component';
import { BrechoRoutingModule } from './brecho-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';


@NgModule({
  declarations: [
    BrechoComponent // Declara o componente BrechoComponent para uso dentro do módulo de brechó
  ],
  imports: [
    RouterModule.forChild(routes), // Importa as rotas definidas para o módulo de brechó
    BrowserModule, // Importa BrowserModule para funcionalidades básicas do Angular relacionadas ao navegador
    HttpClientModule, // Importa HttpClientModule para realizar requisições HTTP
    CommonModule, // Importa CommonModule para utilizar diretivas comuns do Angular
    BrechoRoutingModule, // Importa o módulo de roteamento específico do módulo de brechó
    FormsModule, // Importa FormsModule para habilitar o uso de ngModel no template do componente
    ReactiveFormsModule // Importa ReactiveFormsModule para trabalhar com formulários reativos
  ],
   exports:[
    RouterModule // Exporta RouterModule para que as rotas estejam disponíveis para outros módulos
   ],
  
  providers: [
    PaisService, // Provedor do serviço de países
    BrechoService // Provedor do serviço de brechós
  ],
  bootstrap: [BrechoComponent] // Define BrechoComponent como o componente de inicialização do módulo (isso é incomum em módulos)
})
export class BrechoModule { }
