import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenRegistersComponent } from './admin-open-registers.component';

describe('AdminOpenRegistersComponent', () => {
  let component: AdminOpenRegistersComponent;
  let fixture: ComponentFixture<AdminOpenRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
