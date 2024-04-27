import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais.component';

// Definição das rotas para o módulo Pais
const routes: Routes = [
  {
    path: '', // Rota padrão para o componente PaisComponent
    component: PaisComponent // Componente associado à rota
  }
];

@NgModule({
  declarations: [], // Não há declarações neste módulo de rotas
  imports: [
    RouterModule.forChild(routes), // Importa o módulo de roteamento com as rotas definidas
    CommonModule // Importa CommonModule para utilizar diretivas comuns do Angular
  ],
  exports:[
    RouterModule // Exporta o RouterModule para que as rotas sejam utilizadas em outros módulos
  ]
})
export class PaisRoutingModule { }
