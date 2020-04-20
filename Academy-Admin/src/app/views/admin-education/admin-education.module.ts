import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEducationRoutingModule } from './admin-education-routing.module';
import { AdminMajorComponent } from './admin-major/admin-major.component';
import { AdminMajorsAddComponent } from './admin-major/admin-majors-add/admin-majors-add.component';




@NgModule({
  declarations: [AdminMajorComponent, AdminMajorsAddComponent
  ],
  imports: [
    CommonModule,
    AdminEducationRoutingModule,
  ],
  exports: [
    AdminMajorComponent, AdminMajorsAddComponent
  ]
})
export class AdminEducationModule { }
