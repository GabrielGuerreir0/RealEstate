import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss',
})
export class PropertyCardComponent {
  constructor(private router : Router) {}

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
  @Output() propertyClicked = new EventEmitter<number>(); 

  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  navigateToDetails() {
    this.router.navigate(['/property-details', this.propertyCode]); 
  }
  email: string = 'exemplo@email.com'; 
  whatsappNumber: string = '5585999999999'
}
