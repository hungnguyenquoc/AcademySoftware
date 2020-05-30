import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserManageComponent } from './admin-user-manage/admin-user-manage.component';
import { AdminUserEditComponent } from './admin-user-edit/admin-user-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: 'admin-user-manage',
        component: AdminUserManageComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'admin-user-edit',
        component: AdminUserEditComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'admin-user-edit/:id',
        component: AdminUserEditComponent,
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
export class AdminUserRoutingModule { }
