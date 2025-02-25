import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.component.html',
  styleUrls: ['./carousel.component.component.scss'],
})
export class CarouselComponentComponent {
  currentIndex = 0;
  images = [
    { src: 'assets/images/Container.png', location: 'Localidade 1' },
    { src: 'assets/images/Container.png', location: 'Localidade 2' },
    { src: 'assets/images/Container.png', location: 'Localidade 3' },
    { src: 'assets/images/Container.png', location: 'Localidade 4' },
    { src: 'assets/images/Container.png', location: 'Localidade 5' },
    { src: 'assets/images/Container.png', location: 'Localidade 6' },
    { src: 'assets/images/Container.png', location: 'Localidade 7' },
    { src: 'assets/images/Container.png', location: 'Localidade 8' },
  ];

  moveToNext() {
    if (this.currentIndex < this.images.length - 4) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Volta para o início do carrossel
    }
  }

  moveToPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 4; // Vai para o final do carrossel
    }
  }
}