import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home/home-layout/home-page/home-page.component';
import { LoginComponent } from './home/home-layout/login/login.component';
import { RegisterComponent } from './home/home-layout/register/register.component';
import { AdminLayoutComponent} from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent} from './admin/admin-layout/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './admin/admin-layout/admin-user/admin-user.component';
import { AdminCourseComponent } from './admin/admin-layout/admin-course/admin-course.component';
import { AdminTeacherComponent } from './admin/admin-layout/admin-teacher/admin-teacher.component';
import { AdminStudentComponent } from './admin/admin-layout/admin-student/admin-student.component';
import { AdminRegisterComponent } from './admin/admin-layout/admin-register/admin-register.component';
import { AuthGuard } from './_guards/auth.guard';
const routes: Routes = [
  {path: '', component: HomeLayoutComponent,
    children: [
    {path: '', component: HomePageComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {
    path: 'admin', component: AdminLayoutComponent,
                   canActivate: [AuthGuard],
                   runGuardsAndResolvers: 'always',
    children: [
      {path: '', component: AdminDashboardComponent },
      {path: 'user', component: AdminUserComponent},
      {path: 'course', component: AdminCourseComponent},
      {path: 'teacher', component: AdminTeacherComponent},
      {path: 'student', component: AdminStudentComponent},
      {path: 'register', component: AdminRegisterComponent}
    ]
  }
];

@ NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
