import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraConfigViewComponent } from './jira-config-view.component';

describe('JiraConfigViewComponent', () => {
  let component: JiraConfigViewComponent;
  let fixture: ComponentFixture<JiraConfigViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraConfigViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraConfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
