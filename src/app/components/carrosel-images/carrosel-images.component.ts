import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrosel-images',
  standalone: true,
  imports: [CommonModule], // Importação necessária para usar *ngFor
  templateUrl: './carrosel-images.component.html',
  styleUrls: ['./carrosel-images.component.scss'],
})
export class CarroselImagesComponent {
  images: string[] = [
    'assets/images/Container.png',
    'assets/images/Container.png',
    'assets/images/Container.png',
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  openLink() {
    window.open(
      'https://www.youtube.com/results?search_query=carrosel+angular',
      '_blank'
    );
  }
}
