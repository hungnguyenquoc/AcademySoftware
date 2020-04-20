import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenRegisterComponent } from './admin-open-register.component';

describe('AdminOpenRegisterComponent', () => {
  let component: AdminOpenRegisterComponent;
  let fixture: ComponentFixture<AdminOpenRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
