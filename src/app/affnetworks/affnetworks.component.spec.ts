import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffnetworksComponent } from './affnetworks.component';

describe('AffnetworksComponent', () => {
  let component: AffnetworksComponent;
  let fixture: ComponentFixture<AffnetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffnetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffnetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
