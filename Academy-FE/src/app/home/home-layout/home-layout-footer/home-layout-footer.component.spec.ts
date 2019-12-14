import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutFooterComponent } from './home-layout-footer.component';

describe('HomeLayoutFooterComponent', () => {
  let component: HomeLayoutFooterComponent;
  let fixture: ComponentFixture<HomeLayoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLayoutFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
