import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchComponent } from './admin-batch.component';

describe('AdminBatchComponent', () => {
  let component: AdminBatchComponent;
  let fixture: ComponentFixture<AdminBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
