import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisComponent } from './components/pais/pais.component';
import { BrechoComponent } from './components/brecho/brecho.component';

// Define as rotas da aplicação
export const routes: Routes = [
  // Rota para o componente PaisComponent, carregando o módulo de forma preguiçosa (lazy loading)
  { path: 'pais', loadChildren: () => import('./components/pais/pais.module').then(m => m.PaisModule) },

  // Rota para o componente BrechoComponent, carregando o módulo de forma preguiçosa (lazy loading)
  { path: 'brecho', loadChildren: () => import('./components/brecho/brecho.module').then(m => m.BrechoModule) },

  // Define uma rota padrão que redireciona para '/pais' quando nenhum caminho é fornecido na URL
  { path: '', redirectTo: '/pais', pathMatch: 'full' },

  // Rota de fallback para manipular rotas não encontradas, redirecionando para '/pais'
  { path: '**', redirectTo: '/pais' }
];

@NgModule({
  // Importa o módulo RouterModule.forRoot para configurar as rotas raiz da aplicação
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
