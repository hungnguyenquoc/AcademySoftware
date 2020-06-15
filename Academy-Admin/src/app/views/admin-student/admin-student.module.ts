import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStudentListComponent } from './admin-student-list/admin-student-list.component';
import { AdminStudentRoutingModule } from './admin-student-routing.module';
import { AdminStudentAddComponent } from './admin-student-add/admin-student-add.component';
import { AdminStudentUpdateComponent } from './admin-student-update/admin-student-update.component';
import { AdminStudentDetailComponent } from './admin-student-detail/admin-student-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxBootstrapMultiselectDropdownModule } from 'ngx-bootstrap-multiselect-dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { DataTablesModule } from 'angular-datatables';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AdminStudentPotentialComponent } from './admin-student-potential/admin-student-potential.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AdminStudentChartComponent } from './admin-student-chart/admin-student-chart.component';
import { ChartJSModule } from '../chartjs/chartjs.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [AdminStudentListComponent, AdminStudentAddComponent, 
                  AdminStudentUpdateComponent, AdminStudentDetailComponent, AdminStudentPotentialComponent, AdminStudentChartComponent
                  ],
  imports: [
    CommonModule,
    AdminStudentRoutingModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxBootstrapMultiselectDropdownModule,
    MultiselectDropdownModule,
    TabsModule,
    NzTabsModule,
    NzPaginationModule,
    NzTableModule,
    NzCardModule,
    NzDropDownModule,
    ChartJSModule,
    ChartsModule

  ],
  exports: [AdminStudentListComponent, AdminStudentAddComponent, NzTabsModule,
    AdminStudentUpdateComponent, AdminStudentDetailComponent,
    AdminStudentPotentialComponent, AdminStudentChartComponent
  ]
})
export class AdminStudentModule { }
