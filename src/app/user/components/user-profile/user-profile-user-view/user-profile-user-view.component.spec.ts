import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileUserViewComponent } from './user-profile-user-view.component';

describe('UserProfileUserViewComponent', () => {
  let component: UserProfileUserViewComponent;
  let fixture: ComponentFixture<UserProfileUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
