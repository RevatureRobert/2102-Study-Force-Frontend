import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassPaneComponent } from './glass-pane.component';

describe('GlassPaneComponent', () => {
  let component: GlassPaneComponent;
  let fixture: ComponentFixture<GlassPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
