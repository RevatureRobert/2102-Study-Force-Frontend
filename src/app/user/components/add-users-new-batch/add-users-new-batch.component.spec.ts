import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersNewBatchComponent } from './add-users-new-batch.component';

describe('AddUsersNewBatchComponent', () => {
  let component: AddUsersNewBatchComponent;
  let fixture: ComponentFixture<AddUsersNewBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersNewBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersNewBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
