import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminCourseDetailComponent } from './admin-course-detail/admin-course-detail.component';

// const routes: Routes = [
//   {
//     path: 'admin-course-detail/:id',
//     component: AdminCourseDetailComponent,
//     data: {
//       title: 'Chi tiết khóa học'
//     }
//   }
// ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class CourseRoutingModule { }
