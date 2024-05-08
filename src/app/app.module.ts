import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [ AppComponent ], // Outros módulos importados e componentes declarados
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ], // Importa o módulo RouterModule.forRoot para configurar as rotas raiz da aplicação
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
