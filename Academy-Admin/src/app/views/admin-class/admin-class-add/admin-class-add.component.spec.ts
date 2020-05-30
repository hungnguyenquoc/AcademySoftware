import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassAddComponent } from './admin-class-add.component';

describe('AdminClassAddComponent', () => {
  let component: AdminClassAddComponent;
  let fixture: ComponentFixture<AdminClassAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
