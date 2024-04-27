import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrechoRoutingModule } from './brecho-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrechoComponent } from './brecho.component';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Definição das rotas específicas para o módulo de brechó
const routes: Routes = [
  {
    path: '',
    component: BrechoComponent // Componente associado à rota raiz do módulo de brechó
  }
];

@NgModule({
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
  declarations: [
    BrechoComponent // Declara o componente BrechoComponent para uso dentro do módulo de brechó
  ],
  providers: [
    PaisService, // Provedor do serviço de países
    BrechoService // Provedor do serviço de brechós
  ],
  bootstrap: [BrechoComponent] // Define BrechoComponent como o componente de inicialização do módulo (isso é incomum em módulos)
})
export class BrechoModule { }
