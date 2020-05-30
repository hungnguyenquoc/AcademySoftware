import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleFunctionComponent } from './admin-role-function.component';

describe('AdminRoleFunctionComponent', () => {
  let component: AdminRoleFunctionComponent;
  let fixture: ComponentFixture<AdminRoleFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRoleFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoleFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
