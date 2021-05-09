import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionVoteComponent } from './solution-vote.component';

describe('SolutionVoteComponent', () => {
  let component: SolutionVoteComponent;
  let fixture: ComponentFixture<SolutionVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
