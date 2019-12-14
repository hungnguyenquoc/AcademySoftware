import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule} from '@angular/common/http';
import { AuthService} from './_services/auth.service';
import {MatButtonModule} from '@angular/material/button';



import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { MemberModule } from './member/member.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

export function tokenGetter() {
  return localStorage.getItem('tokenString');
}
@ NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AdminModule,
    MemberModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    MatButtonModule,
    JwtModule.forRoot({
      config: {
          tokenGetter,
        //   tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
