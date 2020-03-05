import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMajorComponent } from './admin-major.component';

describe('AdminMajorComponent', () => {
  let component: AdminMajorComponent;
  let fixture: ComponentFixture<AdminMajorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMajorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
