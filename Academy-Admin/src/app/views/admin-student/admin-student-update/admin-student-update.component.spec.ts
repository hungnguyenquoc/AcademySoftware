import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentUpdateComponent } from './admin-student-update.component';

describe('AdminStudentUpdateComponent', () => {
  let component: AdminStudentUpdateComponent;
  let fixture: ComponentFixture<AdminStudentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
