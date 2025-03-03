import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  showDropdown = false;

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.showDropdown = !this.showDropdown;
  }
}
