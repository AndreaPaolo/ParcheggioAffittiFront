import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffittoComponent } from './affitto.component';

describe('AffittoComponent', () => {
  let component: AffittoComponent;
  let fixture: ComponentFixture<AffittoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffittoComponent]
    });
    fixture = TestBed.createComponent(AffittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
