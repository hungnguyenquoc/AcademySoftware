import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CurrencyPipe  } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');



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
import { MajorService } from './_services/major.service';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientXsrfModule } from '@angular/common/http';

// Begin component for module fucntion
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { AdminUserChangedComponent } from './views/admin-users/admin-user-changed/admin-user-changed.component';
import { AdminUserListComponent } from './views/admin-users/admin-user-list/admin-user-list.component';
import { AdminUserAddComponent } from './views/admin-users/admin-user-add/admin-user-add.component';
import { AdminCoursesComponent } from './views/admin-courses/admin-courses.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminMajorComponent } from './views/admin-major/admin-major.component';
import { ResetPasswordComponent } from './views/login/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './views/confirm-email/confirm-email.component';
import { AdminMajorListComponent } from './views/admin-major/admin-major-list/admin-major-list.component';
import { AdminMajorAddComponent } from './views/admin-major/admin-major-add/admin-major-add.component';
import { ModalModule, BsModalRef  } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AdminMajorUpdateComponent } from './views/admin-major/admin-major-update/admin-major-update.component';
import { AdminProgramStudyComponent } from './views/admin-program-study/admin-program-study.component';
import { AdminProgramStudyAddComponent } from './views/admin-program-study/admin-program-study-add/admin-program-study-add.component';
import { AdminProgramStudyListComponent } from './views/admin-program-study/admin-program-study-list/admin-program-study-list.component';
import { AdminProgramStudyUpdateComponent } from './views/admin-program-study/admin-program-study-update/admin-program-study-update.component';
import { ProgramStudyDirective } from './_directives/program-study.directive';
import { IdentityRevealedDirective } from './_directives/identity-revealed.directive';
import { ProgramDirective } from './_directives/program.directive';
import { AdminProgramsComponent } from './views/admin-programs/admin-programs.component';
import { AdminProgramAddComponent } from './views/admin-programs/admin-program-add/admin-program-add.component';
import { ProgramStudyService } from './_services/program-study.service';
import { AdminProgramUpdateComponent } from './views/admin-programs/admin-program-update/admin-program-update.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AdminTemplateComponent } from './views/admin-template/admin-template.component';
import { AdminOpenRegisterComponent } from './views/admin-courses/admin-open-register/admin-open-register.component';
import { AdminCourseUpdateComponent } from './views/admin-courses/admin-course-update/admin-course-update.component';
import { AdminCourseAddComponent } from './views/admin-courses/admin-course-add/admin-course-add.component';
// End Component for module function
// Begin Add 3rd Library
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CKEditorModule } from 'ngx-ckeditor';
import { AdminCourseDetailComponent } from './views/admin-courses/admin-course-detail/admin-course-detail.component';
import { AdminOpenRegistersComponent } from './views/admin-open-registers/admin-open-registers.component';
import { AdminOpenRegisterAddComponent } from './views/admin-open-registers/admin-open-register-add/admin-open-register-add.component';
import { AdminOpenRegisterUpdateComponent } from './views/admin-open-registers/admin-open-register-update/admin-open-register-update.component';
import { AdminClassModule } from './views/admin-class/admin-class.module';
import { AdminEducationModule } from './views/admin-education/admin-education.module';
import { NgxBootstrapMultiselectDropdownModule } from 'ngx-bootstrap-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AdminUserModule } from './views/admin-user/admin-user.module';


// End Add 3rd Library

export function tokenGetter() {
  return localStorage.getItem('tokenString');
}
// export const options: Partial<IConfig> | (() => Partial<IConfig>);

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
    AdminClassModule,
    AdminUserModule,
    AdminEducationModule,
    JwtModule.forRoot({
      config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),
    HttpClientModule,
    [SweetAlert2Module.forRoot()],
    BsDatepickerModule.forRoot(),
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    DataTablesModule,
    [ModalModule.forRoot()],
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxMaskModule.forRoot(),
    CKEditorModule,
    NgxBootstrapMultiselectDropdownModule,
    NgMultiSelectDropDownModule.forRoot(),
    MultiselectDropdownModule


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
    ConfirmEmailComponent,
    AdminMajorListComponent,
    AdminMajorAddComponent,
    AdminMajorUpdateComponent,
    AdminProgramStudyComponent,
    AdminProgramStudyAddComponent,
    AdminProgramStudyListComponent,
    AdminProgramStudyUpdateComponent,
    ProgramStudyDirective,
    IdentityRevealedDirective,
    ProgramDirective,
    AdminProgramsComponent,
    AdminProgramAddComponent,
    AdminProgramUpdateComponent,
    AdminTemplateComponent,
    AdminOpenRegisterComponent,
    AdminCourseUpdateComponent,
    AdminCourseAddComponent,
    AdminCourseDetailComponent,
    AdminOpenRegistersComponent,
    AdminOpenRegisterAddComponent,
    AdminOpenRegisterUpdateComponent,
    // import các module quản lý phần admin
    // AdminUserModul
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  {
    provide: LOCALE_ID,
    useValue: 'fr',
  },
  AuthGuard,
  AuthService,
  ErrorInterceptorProvider,
  AlertifyService,
  MajorService,
  ProgramStudyService,
  ProgramStudyDirective,
  BsModalRef,
  CurrencyPipe,
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    AdminCourseAddComponent,
  ]
})
export class AppModule { }
