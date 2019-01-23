import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiconfigViewComponent } from './apiconfig-view.component';

describe('ApiconfigViewComponent', () => {
  let component: ApiconfigViewComponent;
  let fixture: ComponentFixture<ApiconfigViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiconfigViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiconfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
