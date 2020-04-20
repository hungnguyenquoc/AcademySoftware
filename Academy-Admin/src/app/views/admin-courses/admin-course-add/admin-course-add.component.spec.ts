import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseAddComponent } from './admin-course-add.component';

describe('AdminCourseAddComponent', () => {
  let component: AdminCourseAddComponent;
  let fixture: ComponentFixture<AdminCourseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
