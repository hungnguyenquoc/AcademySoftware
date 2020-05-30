import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStudentListComponent } from './admin-student-list/admin-student-list.component';
import { AdminStudentRoutingModule } from './admin-student-routing.module';



@NgModule({
  declarations: [AdminStudentListComponent],
  imports: [
    CommonModule,
    AdminStudentRoutingModule
  ],
  exports: [AdminStudentListComponent]
})
export class AdminStudentModule { }
