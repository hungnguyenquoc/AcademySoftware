import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutHeaderComponent } from './home-layout-header.component';

describe('HomeLayoutHeaderComponent', () => {
  let component: HomeLayoutHeaderComponent;
  let fixture: ComponentFixture<HomeLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
