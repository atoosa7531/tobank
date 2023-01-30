import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/components').then((c) => c.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/home/home.component').then((c) => c.HomeComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {
}
