import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserManageComponent } from './admin-user-manage/admin-user-manage.component';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule, TabsModule } from 'ngx-bootstrap';
import { AdminUserAddNewComponent } from './admin-user-add-new/admin-user-add-new.component';
import { AdminUserEditComponent } from './admin-user-edit/admin-user-edit.component';


@NgModule({
  declarations: [ AdminUserManageComponent, AdminUserAddNewComponent, AdminUserEditComponent],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DataTablesModule,
    // ModalModule.forRoot(),
    MultiselectDropdownModule,
    [TabsModule.forRoot()]
  ],
  exports: [ AdminUserManageComponent, AdminUserAddNewComponent, AdminUserEditComponent],
  providers: [
    BsModalRef, BsModalService
  ]
})
export class AdminUserModule { }
