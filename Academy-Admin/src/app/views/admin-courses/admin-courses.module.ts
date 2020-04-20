import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { AdminCourseDetailComponent } from './admin-course-detail/admin-course-detail.component';



@NgModule({
  declarations: [
    AdminCourseDetailComponent

  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AdminCourseDetailComponent
  ],
  exports: [
      AdminCourseDetailComponent
  ]
})
export class AdminCoursesModule { }