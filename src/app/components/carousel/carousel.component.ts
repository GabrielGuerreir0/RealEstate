import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {
  currentIndex = 0;
  images = [
    { src: 'assets/images/cumbuco.png', location: 'Fortaleza' },
    { src: 'assets/images/maracanau.png', location: 'Maracanaú' },
    { src: 'assets/images/juazeiro.png', location: 'Juazeiro do Norte' },
    { src: 'assets/images/caninde.png', location: 'Canindé' },
    { src: 'assets/images/eusebio.jpg', location: 'Eusébio' },
    { src: 'assets/images/cascavel.png', location: 'Cascavel'},
    { src: 'assets/images/guaramiranga.png', location: 'Guaramiranga'},
    { src: 'assets/images/jericoacoara.png', location: 'Jijoca de Jericoacoara'}
  ];

  moveToNext() {
    if (this.currentIndex < this.images.length - 4) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  moveToPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 4;
    }
  }
}