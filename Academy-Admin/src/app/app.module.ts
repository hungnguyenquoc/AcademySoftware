import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertifyService } from './_services/alertify.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HttpClientXsrfModule } from '@angular/common/http';


import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { AdminUserChangedComponent } from './views/admin-users/admin-user-changed/admin-user-changed.component';
import { AdminUserListComponent } from './views/admin-users/admin-user-list/admin-user-list.component';
import { AdminUserAddComponent } from './views/admin-users/admin-user-add/admin-user-add.component';
import { AdminCoursesComponent } from './views/admin-courses/admin-courses.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminMajorComponent } from './views/admin-major/admin-major.component';
import { ResetPasswordComponent } from './views/login/reset-password/reset-password.component';


export function tokenGetter() {
  return localStorage.getItem('tokenString');
}
@ NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    JwtModule.forRoot({
      config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [SweetAlert2Module.forRoot()],
    BsDatepickerModule.forRoot(),
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    DataTablesModule,
    [SweetAlert2Module.forRoot()],


  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AdminUsersComponent,
    AdminUserChangedComponent,
    AdminUserListComponent,
    AdminUserAddComponent,
    AdminCoursesComponent,
    AdminMajorComponent,
    ResetPasswordComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  AuthGuard,
  AuthService,
  ErrorInterceptorProvider,
  AlertifyService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
