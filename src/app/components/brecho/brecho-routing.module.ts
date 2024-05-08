import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrechoComponent } from './brecho.component';

const routes: Routes = [
  {
    path: '', // Rota padrão para o componente BrechoComponent
    component: BrechoComponent // Componente associado à rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrechoRoutingModule { }
