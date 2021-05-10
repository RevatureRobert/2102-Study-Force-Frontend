import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacktraceHomeComponent } from './stacktrace-home.component';

describe('StacktraceHomeComponent', () => {
  let component: StacktraceHomeComponent;
  let fixture: ComponentFixture<StacktraceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StacktraceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StacktraceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
