import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramAddComponent } from './admin-program-add.component';

describe('AdminProgramAddComponent', () => {
  let component: AdminProgramAddComponent;
  let fixture: ComponentFixture<AdminProgramAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
