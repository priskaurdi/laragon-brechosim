import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrechoComponent } from './brecho.component';

// Definição das rotas
const routes: Routes = [
  {
    path: '', // Rota padrão para o componente BrechoComponent
    component: BrechoComponent // Componente associado à rota
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa o módulo de roteamento com as rotas definidas
  exports:[RouterModule] // Exporta o RouterModule para que as rotas sejam utilizadas em outros módulos
})
export class BrechoRoutingModule { }
