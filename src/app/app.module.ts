import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe o módulo do componente PaisModule para carregamento preguiçoso (lazy loading)
import { PaisModule } from './components/pais/pais.module';

// Define as rotas da aplicação
const appRoutes: Routes = [
  // ... outras rotas
  {
    // Define o caminho da rota
    path: 'pais', 

    // Carrega o módulo do componente PaisModule de forma preguiçosa (lazy loading)
    loadChildren: () => import('./components/pais/pais.module').then(m => m.PaisModule)
  }
];

@NgModule({
  // Outros módulos importados e componentes declarados
  imports: [
    // Importa o módulo RouterModule.forRoot para configurar as rotas raiz da aplicação
    RouterModule.forRoot(appRoutes)
  ],
  // ...
})
export class AppModule { }
