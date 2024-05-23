import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresSectionComponent } from './genres-section.component';

describe('GenresSectionComponent', () => {
  let component: GenresSectionComponent;
  let fixture: ComponentFixture<GenresSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenresSectionComponent]
    });
    fixture = TestBed.createComponent(GenresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
