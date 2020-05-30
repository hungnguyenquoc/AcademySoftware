import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { AdminCoursesComponent } from './views/admin-courses/admin-courses.component';
import { ResetPasswordComponent } from './views/login/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './views/confirm-email/confirm-email.component';
import { AdminMajorComponent } from './views/admin-major/admin-major.component';
import { AdminProgramStudyComponent } from './views/admin-program-study/admin-program-study.component';
import { AdminProgramsComponent } from './views/admin-programs/admin-programs.component';
import { AdminTemplateComponent } from './views/admin-template/admin-template.component';
import { AdminCourseDetailComponent } from './views/admin-courses/admin-course-detail/admin-course-detail.component';
import { AdminCourseUpdateComponent } from './views/admin-courses/admin-course-update/admin-course-update.component';
import { AdminMajorAddComponent } from './views/admin-major/admin-major-add/admin-major-add.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'confirm-email',
    component: ConfirmEmailComponent
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'admin-users',
        component: AdminUsersComponent
      },
      // Bắt đầu Routing của phần quản lý khóa học
      {
        path: 'admin-courses',
        component: AdminCoursesComponent
      },
      {
        path: 'admin-courses/admin-course-detail/:id',
        component: AdminCourseDetailComponent
      },
       {
        path: 'admin-courses/admin-course-update/:id',
        component: AdminCourseUpdateComponent
      },
      // Kết thúc Routing của phần quản lý khóa học

      {
        path: 'admin-major',
        component: AdminMajorComponent
      },
      {
        path: 'admin-major/admin-major-add/:id',
        component: AdminMajorAddComponent
      },
      {
        path: 'admin-programs',
        component: AdminProgramsComponent
      },
      {
        path: 'admin-program-study',
        component: AdminProgramStudyComponent
      },
      {
        path: 'admin-template',
        component: AdminTemplateComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'admin-class',
        loadChildren: () => import('./views/admin-class/admin-class.module').then(m => m.AdminClassModule)
      },
      {
        path: 'admin-education',
        loadChildren: () => import('./views/admin-education/admin-education.module').then(m => m.AdminEducationModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      //  Phần khai báo routing cho các module quản lý.
      {
        path: 'admin-user',
        loadChildren: () => import('./views/admin-user/admin-user.module').then(m => m.AdminUserModule)
      },
      {
        path: 'admin-roles',
        loadChildren: () => import('./views/admin-roles/admin-roles.module').then(m => m.AdminRolesModule)
      },
      {
        path: 'admin-student',
        loadChildren: () => import('./views/admin-student/admin-student.module').then(m => m.AdminStudentModule)
      },
      {
        path: 'admin-announcement',
        loadChildren: () => import('./views/admin-announcement/admin-announcement.module').then(m => m.AdminAnnouncementModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@ NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
