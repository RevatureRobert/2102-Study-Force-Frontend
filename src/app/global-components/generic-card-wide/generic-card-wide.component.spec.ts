import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCardWideComponent } from './generic-card-wide.component';

describe('GenericCardWideComponent', () => {
  let component: GenericCardWideComponent;
  let fixture: ComponentFixture<GenericCardWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericCardWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
