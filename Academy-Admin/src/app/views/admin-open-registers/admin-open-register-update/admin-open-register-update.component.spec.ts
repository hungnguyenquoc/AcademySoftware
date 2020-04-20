import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenRegisterUpdateComponent } from './admin-open-register-update.component';

describe('AdminOpenRegisterUpdateComponent', () => {
  let component: AdminOpenRegisterUpdateComponent;
  let fixture: ComponentFixture<AdminOpenRegisterUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenRegisterUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenRegisterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
