import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramStudyUpdateComponent } from './admin-program-study-update.component';

describe('AdminProgramStudyUpdateComponent', () => {
  let component: AdminProgramStudyUpdateComponent;
  let fixture: ComponentFixture<AdminProgramStudyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramStudyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramStudyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
