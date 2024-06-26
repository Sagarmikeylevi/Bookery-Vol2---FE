import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSectionComponent } from './books-section.component';

describe('BooksSectionComponent', () => {
  let component: BooksSectionComponent;
  let fixture: ComponentFixture<BooksSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksSectionComponent]
    });
    fixture = TestBed.createComponent(BooksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
