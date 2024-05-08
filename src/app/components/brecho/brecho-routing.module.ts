import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrechoComponent } from './brecho.component';

// Definição das rotas
const routes: Routes = [
  {
    path: '', // Rota raiz
    component: BrechoComponent, // Componente associado à rota raiz
    pathMatch: 'full' // Define que a rota só será correspondida se o caminho completo da URL estiver vazio
  },
];

  @NgModule({
    declarations: [], // Nenhuma declaração de componente neste módulo de roteamento
    imports: [
      RouterModule.forRoot(routes), // Importa o RouterModule e configura as rotas principais
      CommonModule // Importa o CommonModule necessário para usar diretivas comuns do Angular
    ],
    exports: [
      RouterModule // Exporta RouterModule para que as rotas estejam disponíveis para outros módulos
    ]
  })
  export class BrechoRoutingModule { }
