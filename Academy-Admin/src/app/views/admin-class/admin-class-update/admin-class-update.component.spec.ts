import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassUpdateComponent } from './admin-class-update.component';

describe('AdminClassUpdateComponent', () => {
  let component: AdminClassUpdateComponent;
  let fixture: ComponentFixture<AdminClassUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
