import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBellFlashcardComponent } from './subscribe-bell-flashcard.component';

describe('SubscribeBellFlashcardComponent', () => {
  let component: SubscribeBellFlashcardComponent;
  let fixture: ComponentFixture<SubscribeBellFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeBellFlashcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeBellFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
