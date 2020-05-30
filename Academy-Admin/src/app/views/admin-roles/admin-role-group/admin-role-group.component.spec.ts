import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleGroupComponent } from './admin-role-group.component';

describe('AdminRoleGroupComponent', () => {
  let component: AdminRoleGroupComponent;
  let fixture: ComponentFixture<AdminRoleGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRoleGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
