import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipFlashcardComponent } from './flip-flashcard.component';

describe('FlipFlashcardComponent', () => {
  let component: FlipFlashcardComponent;
  let fixture: ComponentFixture<FlipFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipFlashcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
