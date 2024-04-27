import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PainelComponent } from '../painel/painel.component';

const routes: Routes = [
  {
    path: '',
    component: PainelComponent,
    pathMatch: 'full'
  },
  {
    path: 'pais',
    loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule)
  },
  {
    path: 'brecho',
    loadChildren: () => import('./brecho.module').then(m => m.BrechoModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class BrechoRoutingModule { }
