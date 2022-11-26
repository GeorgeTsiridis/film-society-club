import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUtilsComponent } from './movie-utils.component';

describe('MovieUtilsComponent', () => {
  let component: MovieUtilsComponent;
  let fixture: ComponentFixture<MovieUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
