import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatailComponent } from './movie-datail.component';

describe('MovieDatailComponent', () => {
  let component: MovieDatailComponent;
  let fixture: ComponentFixture<MovieDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
