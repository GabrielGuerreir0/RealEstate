import { Component } from '@angular/core';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss',
})
export class ResetComponent {
  constructor() {}
}