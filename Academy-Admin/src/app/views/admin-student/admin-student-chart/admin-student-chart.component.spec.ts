import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentChartComponent } from './admin-student-chart.component';

describe('AdminStudentChartComponent', () => {
  let component: AdminStudentChartComponent;
  let fixture: ComponentFixture<AdminStudentChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
