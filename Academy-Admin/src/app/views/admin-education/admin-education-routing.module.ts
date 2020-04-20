import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMajorComponent } from './admin-major/admin-major.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: 'admin-major',
        component: AdminMajorComponent,
        data: {
          title: 'Buttons'
        }
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEducationRoutingModule { }
