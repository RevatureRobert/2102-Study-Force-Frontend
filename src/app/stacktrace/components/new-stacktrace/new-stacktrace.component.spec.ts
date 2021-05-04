import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStacktraceComponent } from './new-stacktrace.component';

describe('NewStacktraceComponent', () => {
  let component: NewStacktraceComponent;
  let fixture: ComponentFixture<NewStacktraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStacktraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStacktraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
