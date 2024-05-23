import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableComponentComponent } from './scrollable-component.component';

describe('ScrollableComponentComponent', () => {
  let component: ScrollableComponentComponent;
  let fixture: ComponentFixture<ScrollableComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollableComponentComponent]
    });
    fixture = TestBed.createComponent(ScrollableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
