import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Money2userComponent } from './money2user.component';

describe('Money2userComponent', () => {
  let component: Money2userComponent;
  let fixture: ComponentFixture<Money2userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Money2userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Money2userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
