import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { Component } from '@angular/core';
import { CarroselImagesComponent } from '../../components/carrosel-images/carrosel-images.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CarroselImagesComponent, CarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
