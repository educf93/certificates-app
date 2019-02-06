import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPanelViewComponent } from './navbar-panel-view.component';

describe('NavbarPanelViewComponent', () => {
  let component: NavbarPanelViewComponent;
  let fixture: ComponentFixture<NavbarPanelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPanelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
