import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmethodsComponent } from './pmethods.component';

describe('PmethodsComponent', () => {
  let component: PmethodsComponent;
  let fixture: ComponentFixture<PmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
