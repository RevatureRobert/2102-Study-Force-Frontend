import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClickedStacktraceComponent } from './view-clicked-stacktrace.component';

describe('ViewClickedStacktraceComponent', () => {
  let component: ViewClickedStacktraceComponent;
  let fixture: ComponentFixture<ViewClickedStacktraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClickedStacktraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClickedStacktraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
