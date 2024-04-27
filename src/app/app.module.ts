import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // ... other routes
  {
    path: 'pais', // Ensure this matches the path in BrechoRoutingModule
    loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule)
  }
];

@NgModule({
  // ... other imports and declarations
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  // ...
})
export class AppModule { }
