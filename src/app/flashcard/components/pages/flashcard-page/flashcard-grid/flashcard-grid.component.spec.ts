import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGridComponent } from './flashcard-grid.component';

import { Flashcard } from "../../../../model/flashcard";

describe('FlashcardGridComponent', () => {
  let component: FlashcardGridComponent;
  let fixture: ComponentFixture<FlashcardGridComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ FlashcardGridComponent ],
  //     imports: [ Flashcard ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

