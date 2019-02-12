import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeCertsViewComponent } from './charge-certs-view.component';

describe('ChargeCertsViewComponent', () => {
  let component: ChargeCertsViewComponent;
  let fixture: ComponentFixture<ChargeCertsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeCertsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeCertsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
