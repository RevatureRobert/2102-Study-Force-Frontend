import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasePageComponent } from 'src/app/global-components/base-page/base-page.component';
import { NavbarComponent } from 'src/app/global-components/navbar/navbar.component';
import { SearchBarComponent } from 'src/app/global-components/search-bar/search-bar.component';
import { VoteComponent } from 'src/app/global-components/vote/vote.component';

import { ViewFlashcardThreadComponent } from './view-flashcard-thread.component';

describe('ViewFlashcardThreadComponent', () => {
  let component: ViewFlashcardThreadComponent;
  let fixture: ComponentFixture<ViewFlashcardThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlashcardThreadComponent, VoteComponent, BasePageComponent, NavbarComponent, SearchBarComponent ],
      imports: [ HttpClientModule ]
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
