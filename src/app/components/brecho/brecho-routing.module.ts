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
    loadChildren: () => import('src/app/components/pais/pais.module.ts').then(m => m.PaisModule)
  },
  {
    path: 'brecho',
    loadChildren: () => import('src/app/components/brecho/brecho.module.ts').then(m => m.BrechoModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class BrechoRoutingModule { }
