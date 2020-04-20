import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramStudyComponent } from './admin-program-study.component';

describe('AdminProgramStudyComponent', () => {
  let component: AdminProgramStudyComponent;
  let fixture: ComponentFixture<AdminProgramStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
