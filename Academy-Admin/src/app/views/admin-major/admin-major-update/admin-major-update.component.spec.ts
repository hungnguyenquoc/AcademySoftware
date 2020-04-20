import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMajorUpdateComponent } from './admin-major-update.component';

describe('AdminMajorUpdateComponent', () => {
  let component: AdminMajorUpdateComponent;
  let fixture: ComponentFixture<AdminMajorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMajorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMajorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
