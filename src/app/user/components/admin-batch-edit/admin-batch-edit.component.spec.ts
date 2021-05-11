import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchEditComponent } from './admin-batch-edit.component';

describe('AdminBatchEditComponent', () => {
  let component: AdminBatchEditComponent;
  let fixture: ComponentFixture<AdminBatchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBatchEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
