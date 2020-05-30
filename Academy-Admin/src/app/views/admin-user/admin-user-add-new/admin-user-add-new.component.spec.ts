import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAddNewComponent } from './admin-user-add-new.component';

describe('AdminUserAddNewComponent', () => {
  let component: AdminUserAddNewComponent;
  let fixture: ComponentFixture<AdminUserAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
