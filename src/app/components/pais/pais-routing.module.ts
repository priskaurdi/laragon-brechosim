import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais.component';

const routes: Routes = [
  {
    path: '', // Rota padrão para o componente PaisComponent
    component: PaisComponent // Componente associado à rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
