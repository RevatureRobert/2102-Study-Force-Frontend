import { DebugElement } from '@angular/core';

// Add this
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacktraceComponent } from './stacktrace.component';
import { By } from '@angular/platform-browser';
import { StacktraceService } from '../../services/stacktrace.service';
import { StacktraceModule } from '../../stacktrace.module';
import { Stacktrace } from '../../models/stacktrace';

// Test suite
fdescribe('StacktraceComponent', () => {
  let component: StacktraceComponent;

  //Test environment for the component.
  //  1: Provides access to the component
  //  2: Provides access to debug element, which is the rendered html
  let fixture: ComponentFixture<StacktraceComponent>;

  // used to test rendered elements
  let de: DebugElement;

  let serviceStub: any;

  //Initialize Tests
  beforeEach(async () => {
    //Setup Testing Module
    await TestBed.configureTestingModule({
      //Add any components that this component uses internally
      //Just look through template and add any directives you have used
      // declarations: [ ViewClickedStacktraceComponent ],

      //or you can just import the Module to get everything you need for the testing environment
      imports: [StacktraceModule, HttpClientTestingModule],

      //Any Services you need will need to be listed in the providers where you can create stubs
      providers: [{ provide: StacktraceService, useValue: serviceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StacktraceComponent);
    component = fixture.componentInstance;

    // add this
    de = fixture.debugElement;
    fixture.detectChanges();
  });
});
