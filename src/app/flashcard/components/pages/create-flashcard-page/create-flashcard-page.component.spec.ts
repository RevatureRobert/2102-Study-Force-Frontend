import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BasePageComponent } from 'src/app/global-components/base-page/base-page.component';
import { NavbarComponent } from 'src/app/global-components/navbar/navbar.component';
import { SearchBarComponent } from 'src/app/global-components/search-bar/search-bar.component';

import { CreateFlashcardPageComponent } from './create-flashcard-page.component';

describe('CreateFlashcardPageComponent', () => {
  let component: CreateFlashcardPageComponent;
  let fixture: ComponentFixture<CreateFlashcardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFlashcardPageComponent, BasePageComponent, NavbarComponent, SearchBarComponent ],
      imports: [ FormsModule, HttpClientModule ]
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
