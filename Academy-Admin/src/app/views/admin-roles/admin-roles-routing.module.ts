import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoleGroupComponent } from './admin-role-group/admin-role-group.component';
import { AdminRoleFunctionComponent } from './admin-role-function/admin-role-function.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: 'admin-role-group',
        component: AdminRoleGroupComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'admin-role-function',
        component: AdminRoleFunctionComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRolesRoutingModule { }
