import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenRegisterAddComponent } from './admin-open-register-add.component';

describe('AdminOpenRegisterAddComponent', () => {
  let component: AdminOpenRegisterAddComponent;
  let fixture: ComponentFixture<AdminOpenRegisterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenRegisterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenRegisterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
