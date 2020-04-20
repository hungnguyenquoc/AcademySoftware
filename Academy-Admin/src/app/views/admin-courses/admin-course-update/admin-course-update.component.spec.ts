import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseUpdateComponent } from './admin-course-update.component';

describe('AdminCourseUpdateComponent', () => {
  let component: AdminCourseUpdateComponent;
  let fixture: ComponentFixture<AdminCourseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
