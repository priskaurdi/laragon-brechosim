import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisComponent } from './components/pais/pais.component';
import { BrechoComponent } from './components/brecho/brecho.component';

const routes: Routes = [
  { path: 'pais', loadChildren: () => import('./components/pais/pais.module').then(m => m.PaisModule) },
  { path: 'brecho', loadChildren: () => import('./components/brecho/brecho.module').then(m => m.BrechoModule) },
  { path: '', redirectTo: '/pais', pathMatch: 'full' }, // Defina uma rota padrão se necessário
  { path: '**', redirectTo: '/pais' } // Rota de fallback para manipular rotas não encontradas
];

export const routes: Routes = [
    // Suas rotas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
