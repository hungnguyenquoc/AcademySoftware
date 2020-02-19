import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-layout/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-layout/admin-footer/admin-footer.component';
import { AdminStudentComponent } from './admin-layout/admin-student/admin-student.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { AdminUserComponent } from './admin-layout/admin-user/admin-user.component';
import { AdminUserChangeComponent } from './admin-layout/admin-user/admin-user-change/admin-user-change.component';
import { AdminUserListComponent } from './admin-layout/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserAddComponent } from './admin-layout/admin-user/admin-user-add/admin-user-add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),

  ],
  declarations: [AdminLayoutComponent,
                AdminDashboardComponent,
                AdminHeaderComponent,
                AdminSidebarComponent,
                AdminFooterComponent,
                AdminStudentComponent,
                AdminUserComponent,
                AdminUserChangeComponent,
                AdminUserListComponent,
                AdminUserAddComponent],
  exports: [AdminLayoutComponent,
            AdminDashboardComponent,
            AdminHeaderComponent,
            AdminSidebarComponent,
            AdminFooterComponent,
            AdminStudentComponent,
            AdminUserComponent,
            AdminUserChangeComponent,
            AdminUserListComponent,
            AdminUserAddComponent]

})
export class AdminModule { }
