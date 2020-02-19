import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
// import { MemberDetailComponent } from './members/member-detail/member-detail.component';
// import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
// import { MemberListResolver } from './_resolvers/member-list.resolver';
// import { MemberEditComponent } from './members/member-edit/member-edit.component';
// import { MemberEditResolver } from './_resolvers/member-edit.resolver';
// import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { HomePageComponent } from './home/home-layout/home-page/home-page.component';
import { LoginComponent } from './home/home-layout/login/login.component';
import { RegisterComponent } from './home/home-layout/register/register.component';
import {HomeModule} from './home/home.module';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-layout/admin-dashboard/admin-dashboard.component';
import { AdminStudentComponent } from './admin/admin-layout/admin-student/admin-student.component';
import { AdminUserComponent } from './admin/admin-layout/admin-user/admin-user.component';


export const appRoutes: Routes = [
    {path: '', component: HomeLayoutComponent,
    children: [
        {path: '', component: HomePageComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent}
    ]
    },
    {
        path: 'admin', component: AdminLayoutComponent,
        children: [
          {path: '', component: AdminDashboardComponent },
          {path: 'student', component: AdminStudentComponent},
          {path: 'user', component: AdminUserComponent}
        ]
    }
];
