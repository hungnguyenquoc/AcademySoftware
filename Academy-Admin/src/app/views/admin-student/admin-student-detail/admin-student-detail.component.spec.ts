import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentDetailComponent } from './admin-student-detail.component';

describe('AdminStudentDetailComponent', () => {
  let component: AdminStudentDetailComponent;
  let fixture: ComponentFixture<AdminStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
