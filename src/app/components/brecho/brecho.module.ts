import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { BrechoComponent } from './brecho.component'; 
import { BrechoRoutingModule } from './brecho-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';
import { ClienteService } from '../../services/cliente.service';
import { AppRoutingModule } from '../../app-routing.module'; 

@NgModule({
  declarations: [
    BrechoComponent
  ],
  imports: [
    CommonModule,
    BrechoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PaisService,
    BrechoService,
    ClienteService
  ],
})
export class BrechoModule { }
