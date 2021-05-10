import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBellStacktraceComponent } from './subscribe-bell-stacktrace.component';

describe('SubscribeBellStacktraceComponent', () => {
  let component: SubscribeBellStacktraceComponent;
  let fixture: ComponentFixture<SubscribeBellStacktraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeBellStacktraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeBellStacktraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
