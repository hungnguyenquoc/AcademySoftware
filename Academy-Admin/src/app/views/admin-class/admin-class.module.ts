import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminClassRoutingModule } from './admin-class-routing.module';
import { AdminClassListComponent } from './admin-class-list/admin-class-list.component';
import { AdminClassAddComponent } from './admin-class-add/admin-class-add.component';
import { AdminClassUpdateComponent } from './admin-class-update/admin-class-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxBootstrapMultiselectDropdownModule } from 'ngx-bootstrap-multiselect-dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';


@NgModule({
  declarations: [AdminClassListComponent, AdminClassAddComponent, AdminClassUpdateComponent],
  imports: [
    CommonModule,
    AdminClassRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxBootstrapMultiselectDropdownModule,
    MultiselectDropdownModule
  ],
  exports: [
    AdminClassListComponent, AdminClassAddComponent
  ]
})
export class AdminClassModule { }
