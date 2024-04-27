import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais.component';

const routes: Routes = [
  {
    path: '',
    component: PaisComponent
  }
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class PaisRoutingModule { }
