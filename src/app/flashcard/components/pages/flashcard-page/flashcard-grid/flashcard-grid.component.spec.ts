import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGridComponent } from './flashcard-grid.component';

import { Flashcard } from '../../../../model/flashcard';

describe('FlashcardGridComponent', () => {
  let component: FlashcardGridComponent;
  let fixture: ComponentFixture<FlashcardGridComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
