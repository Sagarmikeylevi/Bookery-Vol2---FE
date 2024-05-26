import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationSectionComponent } from './registation-section.component';

describe('RegistationSectionComponent', () => {
  let component: RegistationSectionComponent;
  let fixture: ComponentFixture<RegistationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistationSectionComponent]
    });
    fixture = TestBed.createComponent(RegistationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
