import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramStudyListComponent } from './admin-program-study-list.component';

describe('AdminProgramStudyListComponent', () => {
  let component: AdminProgramStudyListComponent;
  let fixture: ComponentFixture<AdminProgramStudyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramStudyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramStudyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
