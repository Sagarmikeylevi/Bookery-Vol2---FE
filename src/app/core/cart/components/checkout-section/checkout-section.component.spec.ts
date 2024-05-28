import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSectionComponent } from './checkout-section.component';

describe('CheckoutSectionComponent', () => {
  let component: CheckoutSectionComponent;
  let fixture: ComponentFixture<CheckoutSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutSectionComponent]
    });
    fixture = TestBed.createComponent(CheckoutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
