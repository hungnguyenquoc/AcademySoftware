import { Routes } from '@angular/router';

import { HomeOneComponent } from './home-one.component';
import { HomeTwoComponent } from './home-two.component';
import { AllSectionsComponent } from './all-sections.component';
import { DemoComponent } from './demo/demo.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';

export const HomeRoutes: Routes = [
  { path: 'one', component: HomeOneComponent },
  // {
  //   children: [
  //     { path: 'one/course-detail/:id',
  //       component: CourseDetailComponent
  //     }
  //   ]
  // },
  { path: 'two', component: HomeTwoComponent },
  {
    path: 'course-detail/:id',
    component: CourseDetailComponent
  },
  {
    path: 'class-detail/:id',
    component: ClassDetailComponent
  },
  { path: 'all', component: AllSectionsComponent },
  { path: 'demos', component: DemoComponent }
];