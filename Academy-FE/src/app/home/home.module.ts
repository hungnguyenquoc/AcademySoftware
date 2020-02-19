import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeLayoutHeaderComponent } from './home-layout/home-layout-header/home-layout-header.component';
import { HomeLayoutFooterComponent } from './home-layout/home-layout-footer/home-layout-footer.component';
import { LoginComponent } from './home-layout/login/login.component';
import { RegisterComponent } from './home-layout/register/register.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule} from '@angular/material';

import { HomePageComponent } from './home-layout/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService} from '../_services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from '../_guards/auth.guard';
import { ErrorInterceptorProvider } from '../_services/error.interceptor';

@ NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeLayoutHeaderComponent,
    HomeLayoutFooterComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent],
  exports: [
    HomeLayoutComponent,
    HomeLayoutHeaderComponent,
    HomeLayoutFooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    ErrorInterceptorProvider
  ]
})
export class HomeModule { }
