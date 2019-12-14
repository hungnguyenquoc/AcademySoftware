import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../_services/auth.service';

import { JwtModule } from '@auth0/angular-jwt';


// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-layout/admin-sidebar/admin-sidebar.component';
import { AdminBadgeComponent } from './admin-layout/admin-badge/admin-badge.component';
import { AdminFooterComponent } from './admin-layout/admin-footer/admin-footer.component';
import { AdminUserComponent } from './admin-layout/admin-user/admin-user.component';
import { AdminCourseComponent } from './admin-layout/admin-course/admin-course.component';
import { AdminStudentComponent } from './admin-layout/admin-student/admin-student.component';
import { AdminTeacherComponent } from './admin-layout/admin-teacher/admin-teacher.component';
import { AdminRegisterComponent } from './admin-layout/admin-register/admin-register.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from '../_guards/auth.guard';
import { UserService } from '../_services/user.service';
import { ErrorInterceptorProvider } from '../_services/error.interceptor';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return localStorage.getItem('tokenString');
}
@ NgModule({
  declarations: [AdminLayoutComponent, AdminDashboardComponent,
    AdminHeaderComponent, AdminSidebarComponent, AdminBadgeComponent, AdminFooterComponent,
    AdminUserComponent, AdminCourseComponent, AdminStudentComponent,
    AdminTeacherComponent, AdminRegisterComponent],
  exports: [AdminLayoutComponent, AdminDashboardComponent,
    AdminHeaderComponent, AdminSidebarComponent,
    AdminBadgeComponent, AdminFooterComponent,
    AdminUserComponent, AdminCourseComponent, AdminStudentComponent,
    AdminTeacherComponent, AdminRegisterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule,
    ToastrModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
          tokenGetter,
        //   tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })

  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    ErrorInterceptorProvider
   ]
  // providers: [{
  //   provide: LocationStrategy,
  //   useClass: HashLocationStrategy,

  // }]
})
export class AdminModule { }
