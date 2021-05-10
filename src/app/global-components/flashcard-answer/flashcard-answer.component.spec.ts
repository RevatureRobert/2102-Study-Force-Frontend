import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoteComponent } from '../vote/vote.component';

import { FlashcardAnswerComponent } from './flashcard-answer.component';

describe('FlashcardAnswerComponent', () => {
  let component: FlashcardAnswerComponent;
  let fixture: ComponentFixture<FlashcardAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardAnswerComponent, VoteComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
