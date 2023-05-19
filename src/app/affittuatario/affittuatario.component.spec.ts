import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffittuatarioComponent } from './affittuatario.component';

describe('AffittuatarioComponent', () => {
  let component: AffittuatarioComponent;
  let fixture: ComponentFixture<AffittuatarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffittuatarioComponent]
    });
    fixture = TestBed.createComponent(AffittuatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
