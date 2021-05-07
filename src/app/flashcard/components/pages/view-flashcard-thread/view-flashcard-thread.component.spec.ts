import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlashcardThreadComponent } from './view-flashcard-thread.component';

describe('ViewFlashcardThreadComponent', () => {
  let component: ViewFlashcardThreadComponent;
  let fixture: ComponentFixture<ViewFlashcardThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlashcardThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlashcardThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
