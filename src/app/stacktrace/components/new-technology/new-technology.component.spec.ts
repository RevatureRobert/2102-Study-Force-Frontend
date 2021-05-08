import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechnologyComponent } from './new-technology.component';

describe('NewTechnologyComponent', () => {
  let component: NewTechnologyComponent;
  let fixture: ComponentFixture<NewTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
