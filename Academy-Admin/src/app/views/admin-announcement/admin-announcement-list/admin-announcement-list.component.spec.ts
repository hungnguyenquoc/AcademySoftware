import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnnouncementListComponent } from './admin-announcement-list.component';

describe('AdminAnnouncementListComponent', () => {
  let component: AdminAnnouncementListComponent;
  let fixture: ComponentFixture<AdminAnnouncementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnnouncementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnnouncementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
