import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassListComponent } from './admin-class-list.component';

describe('AdminClassListComponent', () => {
  let component: AdminClassListComponent;
  let fixture: ComponentFixture<AdminClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
