import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentPotentialComponent } from './admin-student-potential.component';

describe('AdminStudentPotentialComponent', () => {
  let component: AdminStudentPotentialComponent;
  let fixture: ComponentFixture<AdminStudentPotentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentPotentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
