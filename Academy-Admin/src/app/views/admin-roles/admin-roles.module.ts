import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoleFunctionComponent } from './admin-role-function/admin-role-function.component';
import { AdminRolePermissionComponent } from './admin-role-permission/admin-role-permission.component';
import { AdminRoleGroupComponent } from './admin-role-group/admin-role-group.component';
import { AdminRolesRoutingModule } from './admin-roles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [AdminRoleFunctionComponent, AdminRolePermissionComponent, AdminRoleGroupComponent],
  imports: [
    CommonModule,
    AdminRolesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DataTablesModule,
    ModalModule.forRoot(),
    MultiselectDropdownModule,
    [SweetAlert2Module.forRoot()],

  ],
  exports: [
    AdminRoleFunctionComponent, AdminRolePermissionComponent, AdminRoleGroupComponent
  ]
})
export class AdminRolesModule { }
