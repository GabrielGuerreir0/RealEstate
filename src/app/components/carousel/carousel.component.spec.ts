import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent] // Como é standalone, importa diretamente
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change slide when nextSlide is called', () => {
    const initialIndex = component.currentIndex;
    component.nextSlide();
    expect(component.currentIndex).toBe((initialIndex + 1) % component.images.length);
  });

  it('should change slide when prevSlide is called', () => {
    const initialIndex = component.currentIndex;
    component.prevSlide();
    expect(component.currentIndex).toBe((initialIndex - 1 + component.images.length) % component.images.length);
  });
});