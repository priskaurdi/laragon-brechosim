import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrechoRoutingModule } from './components/brecho/brecho-routing.module';
import { PaisRoutingModule } from './components/pais/pais-routing.module';


const routes: Routes = [
  // Defina suas rotas aqui
  
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
