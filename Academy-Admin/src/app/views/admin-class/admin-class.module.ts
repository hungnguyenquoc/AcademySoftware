import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminClassRoutingModule } from './admin-class-routing.module';
import { AdminClassListComponent } from './admin-class-list/admin-class-list.component';



@NgModule({
  declarations: [AdminClassListComponent],
  imports: [
    CommonModule,
    AdminClassRoutingModule,
  ],
  exports: [
    AdminClassListComponent
  ]
})
export class AdminClassModule { }
