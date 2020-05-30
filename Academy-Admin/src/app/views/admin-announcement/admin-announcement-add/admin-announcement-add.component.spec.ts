import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnnouncementAddComponent } from './admin-announcement-add.component';

describe('AdminAnnouncementAddComponent', () => {
  let component: AdminAnnouncementAddComponent;
  let fixture: ComponentFixture<AdminAnnouncementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnnouncementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnnouncementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
