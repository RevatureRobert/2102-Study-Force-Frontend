import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardTopicComponent } from './flashcard-topic.component';

describe('FlashcardTopicComponent', () => {
  let component: FlashcardTopicComponent;
  let fixture: ComponentFixture<FlashcardTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
