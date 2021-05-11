import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchCreateComponent } from './admin-batch-create.component';

describe('AdminBatchCreateComponent', () => {
  let component: AdminBatchCreateComponent;
  let fixture: ComponentFixture<AdminBatchCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBatchCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
