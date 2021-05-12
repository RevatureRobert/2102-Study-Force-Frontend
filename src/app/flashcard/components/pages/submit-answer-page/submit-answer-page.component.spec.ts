import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SubmitAnswerPageComponent } from './submit-answer-page.component';

describe('SubmitAnswerPageComponent', () => {
  let component: SubmitAnswerPageComponent;
  let fixture: ComponentFixture<SubmitAnswerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAnswerPageComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAnswerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


