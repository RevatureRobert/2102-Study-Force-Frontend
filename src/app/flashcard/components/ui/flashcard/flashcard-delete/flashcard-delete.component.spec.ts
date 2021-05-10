import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardComponent } from '../flashcard.component';

import { FlashcardDeleteComponent } from './flashcard-delete.component';

describe('FlashcardDeleteComponent', () => {
  let component: FlashcardDeleteComponent;
  let fixture: ComponentFixture<FlashcardDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardDeleteComponent ],
      imports: [ HttpClientModule ],
      providers: [ FlashcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
