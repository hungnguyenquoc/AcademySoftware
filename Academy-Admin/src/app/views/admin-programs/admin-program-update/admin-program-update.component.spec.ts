import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramUpdateComponent } from './admin-program-update.component';

describe('AdminProgramUpdateComponent', () => {
  let component: AdminProgramUpdateComponent;
  let fixture: ComponentFixture<AdminProgramUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
