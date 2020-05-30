import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminClassListComponent } from './admin-class-list/admin-class-list.component';
import { AdminClassAddComponent } from './admin-class-add/admin-class-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: 'admin-class-list',
        component: AdminClassListComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'admin-class-add',
        component: AdminClassAddComponent,
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
export class AdminClassRoutingModule { }
