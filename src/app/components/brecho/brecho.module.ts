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



const routes: Routes = [
  {
    path: '',
    component: BrechoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrechoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    BrechoComponent
  ],
  ,
  providers: [
    PaisService,
    BrechoService
  ],
  bootstrap: [BrechoComponent]
})
export class BrechoModule { }

