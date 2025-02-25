import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponentComponent } from './carousel.component.component';

describe('CarouselComponentComponent', () => {
  let component: CarouselComponentComponent;
  let fixture: ComponentFixture<CarouselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponentComponent] // Como é standalone, importa diretamente
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponentComponent);
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
