import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomePageComponent } from './home-layout/home-page/home-page.component';
import { LoginComponent } from './home-layout/login/login.component';
import { RegisterComponent } from './home-layout/register/register.component';
import { HomeLayoutHeaderComponent } from './home-layout/home-layout-header/home-layout-header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [HomeLayoutComponent,
                HomePageComponent,
                LoginComponent,
                RegisterComponent,
                HomeLayoutHeaderComponent],
  exports: [
              HomeLayoutComponent,
              HomePageComponent,
              LoginComponent,
              RegisterComponent,
              HomeLayoutHeaderComponent
  ]
})
export class HomeModule { }
