import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersEmailComponent } from './add-users-email.component';

describe('AddUsersEmailComponent', () => {
  let component: AddUsersEmailComponent;
  let fixture: ComponentFixture<AddUsersEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
