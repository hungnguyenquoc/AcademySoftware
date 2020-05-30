import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnnouncementListComponent } from './admin-announcement-list/admin-announcement-list.component';
import { AdminAnnouncementRoutingModule } from './admin-announcement-routing.module';
import { AdminAnnouncementAddComponent } from './admin-announcement-add/admin-announcement-add.component';


@NgModule({
  declarations: [AdminAnnouncementListComponent, AdminAnnouncementAddComponent],
  imports: [
    CommonModule,
    AdminAnnouncementRoutingModule
  ],
  exports: [AdminAnnouncementListComponent, AdminAnnouncementAddComponent]
})
export class AdminAnnouncementModule { }
