import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselImagesComponent } from './carrosel-images.component';

describe('CarroselImagesComponent', () => {
  let component: CarroselImagesComponent;
  let fixture: ComponentFixture<CarroselImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselImagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarroselImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
