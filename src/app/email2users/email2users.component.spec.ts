import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Email2usersComponent } from './email2users.component';

describe('Email2usersComponent', () => {
  let component: Email2usersComponent;
  let fixture: ComponentFixture<Email2usersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Email2usersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Email2usersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
