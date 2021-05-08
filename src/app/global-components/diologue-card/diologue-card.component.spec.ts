import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologueCardComponent } from './diologue-card.component';

describe('DiologueCardComponent', () => {
  let component: DiologueCardComponent;
  let fixture: ComponentFixture<DiologueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiologueCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiologueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
