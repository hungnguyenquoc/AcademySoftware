import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserChangedComponent } from './admin-user-changed.component';

describe('AdminUserChangedComponent', () => {
  let component: AdminUserChangedComponent;
  let fixture: ComponentFixture<AdminUserChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
