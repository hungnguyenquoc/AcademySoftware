import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseCategoryComponent } from './admin-course-category.component';

describe('AdminCourseCategoryComponent', () => {
  let component: AdminCourseCategoryComponent;
  let fixture: ComponentFixture<AdminCourseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
