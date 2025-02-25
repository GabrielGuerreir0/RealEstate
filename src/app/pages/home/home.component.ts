import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { Component } from '@angular/core';
import { CarroselImagesComponent } from '../../components/carrosel-images/carrosel-images.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselComponentComponent } from '../../components/carousel.component/carousel.component.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CarroselImagesComponent, FooterComponent, CarouselComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
