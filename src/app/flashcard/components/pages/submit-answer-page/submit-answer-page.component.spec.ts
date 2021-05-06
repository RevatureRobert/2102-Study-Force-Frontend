import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAnswerPageComponent } from './submit-answer-page.component';

describe('SubmitAnswerPageComponent', () => {
  let component: SubmitAnswerPageComponent;
  let fixture: ComponentFixture<SubmitAnswerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAnswerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAnswerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
