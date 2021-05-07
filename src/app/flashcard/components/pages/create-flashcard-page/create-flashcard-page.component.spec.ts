import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlashcardPageComponent } from './create-flashcard-page.component';

describe('CreateFlashcardPageComponent', () => {
  let component: CreateFlashcardPageComponent;
  let fixture: ComponentFixture<CreateFlashcardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFlashcardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlashcardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
