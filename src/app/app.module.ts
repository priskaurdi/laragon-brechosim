import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





// // Importe o módulo do componente PaisModule para carregamento preguiçoso (lazy loading)
// import { PaisModule } from './components/pais/pais.module';

// // Define as rotas da aplicação
// const appRoutes: Routes = [
//   // ... outras rotas
//   {
//     // Define o caminho da rota
//     path: 'pais', 

//     // Carrega o módulo do componente PaisModule de forma preguiçosa (lazy loading)
//     loadChildren: () => import('./components/pais/pais.module').then(m => m.PaisModule)
//   }
// ];

@NgModule({
  declarations: [ AppComponent ],
  // Outros módulos importados e componentes declarados
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Importa o módulo RouterModule.forRoot para configurar as rotas raiz da aplicação
  providers: [],
  bootstrap: [ AppComponent ]
  // ...
})
export class AppModule { }
