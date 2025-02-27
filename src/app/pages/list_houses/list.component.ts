import { Component } from '@angular/core';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor() {}
}
