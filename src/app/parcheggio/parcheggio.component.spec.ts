import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcheggioComponent } from './parcheggio.component';

describe('ParcheggioComponent', () => {
  let component: ParcheggioComponent;
  let fixture: ComponentFixture<ParcheggioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcheggioComponent]
    });
    fixture = TestBed.createComponent(ParcheggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
