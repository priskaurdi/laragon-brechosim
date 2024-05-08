import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { PainelComponent } from './components/painel/painel.component';

const routes: Routes = [
  {
    path: '',
    component: PainelComponent,
    pathMatch: 'full'
  },
  {
    path: 'pais',
    loadChildren: () => import('./components/pais/pais.module').then(m => m.PaisModule)
  },
  {
    path: 'brecho',
    loadChildren: () => import('./components/brecho/brecho.module').then(m => m.BrechoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
