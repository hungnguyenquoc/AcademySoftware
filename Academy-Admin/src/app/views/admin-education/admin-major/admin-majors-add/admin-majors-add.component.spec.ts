import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMajorsAddComponent } from './admin-majors-add.component';

describe('AdminMajorsAddComponent', () => {
  let component: AdminMajorsAddComponent;
  let fixture: ComponentFixture<AdminMajorsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMajorsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMajorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
