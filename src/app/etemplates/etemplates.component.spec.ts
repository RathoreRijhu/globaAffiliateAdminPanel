import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtemplatesComponent } from './etemplates.component';

describe('EtemplatesComponent', () => {
  let component: EtemplatesComponent;
  let fixture: ComponentFixture<EtemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
