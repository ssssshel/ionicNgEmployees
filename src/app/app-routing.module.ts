import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'employees-list',
    loadChildren: () => import('./views/employees-list/employees-list.module').then(m => m.EmployeesListPageModule)
  },
  {
    path: 'employee-profile/:id',
    loadChildren: () => import('./views/employee-profile/employee-profile.module').then(m => m.EmployeeProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
