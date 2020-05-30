import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminAnnouncementListComponent } from './admin-announcement-list/admin-announcement-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: 'admin-announcement-list',
        component: AdminAnnouncementListComponent,
        data: {
          title: 'Buttons'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAnnouncementRoutingModule { }
