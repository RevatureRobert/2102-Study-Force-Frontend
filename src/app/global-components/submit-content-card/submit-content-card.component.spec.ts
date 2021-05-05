import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitContentCardComponent } from './submit-content-card.component';

describe('SubmitContentCardComponent', () => {
  let component: SubmitContentCardComponent;
  let fixture: ComponentFixture<SubmitContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitContentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
