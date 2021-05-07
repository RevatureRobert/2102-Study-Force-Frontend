import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacktraceListComponent } from './stacktrace-list.component';

describe('StacktraceListComponent', () => {
  let component: StacktraceListComponent;
  let fixture: ComponentFixture<StacktraceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StacktraceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StacktraceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
