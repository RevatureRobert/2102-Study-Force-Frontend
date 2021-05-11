import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAdminViewComponent } from './user-profile-admin-view.component';

describe('UserProfileAdminViewComponent', () => {
  let component: UserProfileAdminViewComponent;
  let fixture: ComponentFixture<UserProfileAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
