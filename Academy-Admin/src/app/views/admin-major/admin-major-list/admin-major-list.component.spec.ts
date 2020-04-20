import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMajorListComponent } from './admin-major-list.component';

describe('AdminMajorListComponent', () => {
  let component: AdminMajorListComponent;
  let fixture: ComponentFixture<AdminMajorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMajorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMajorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
