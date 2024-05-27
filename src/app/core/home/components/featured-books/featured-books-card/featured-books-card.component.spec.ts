import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBooksCardComponent } from './featured-books-card.component';

describe('FeaturedBooksCardComponent', () => {
  let component: FeaturedBooksCardComponent;
  let fixture: ComponentFixture<FeaturedBooksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedBooksCardComponent]
    });
    fixture = TestBed.createComponent(FeaturedBooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
