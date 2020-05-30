import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home/one', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  // {
  //   path: 'course-detail/id',
  //   loadChildren: './views/home/course-detail/id'
  // }
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

