import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescheduleComponent } from './movieschedule.component';

describe('MoviescheduleComponent', () => {
  let component: MoviescheduleComponent;
  let fixture: ComponentFixture<MoviescheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviescheduleComponent]
    });
    fixture = TestBed.createComponent(MoviescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
