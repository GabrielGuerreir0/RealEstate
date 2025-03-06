import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss',
})
export class PropertyCardComponent {
  @Input() imageUrl!: string;
  @Input() type!: string;
  @Input() isNew: boolean = false;
  @Input() title!: string;
  @Input() area!: number;
  @Input() bedrooms!: number;
  @Input() suites!: number;
  @Input() parking!: number;
  @Input() price!: number;
  @Input() propertyCode!: number;
  @Input() functionality!: string;

  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
