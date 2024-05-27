import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksHeaderComponent } from './show-books-header.component';

describe('ShowBooksHeaderComponent', () => {
  let component: ShowBooksHeaderComponent;
  let fixture: ComponentFixture<ShowBooksHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBooksHeaderComponent]
    });
    fixture = TestBed.createComponent(ShowBooksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
