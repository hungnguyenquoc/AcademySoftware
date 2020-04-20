import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramStudyAddComponent } from './admin-program-study-add.component';

describe('AdminProgramStudyAddComponent', () => {
  let component: AdminProgramStudyAddComponent;
  let fixture: ComponentFixture<AdminProgramStudyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramStudyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramStudyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
