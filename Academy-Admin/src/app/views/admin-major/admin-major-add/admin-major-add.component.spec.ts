import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMajorAddComponent } from './admin-major-add.component';

describe('AdminMajorAddComponent', () => {
  let component: AdminMajorAddComponent;
  let fixture: ComponentFixture<AdminMajorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMajorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMajorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
