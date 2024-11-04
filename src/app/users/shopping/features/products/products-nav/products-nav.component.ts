import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-nav',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet],
  templateUrl: './products-nav.component.html',
  styleUrls: ['./products-nav.component.css'],
})
export class ProductsNavComponent {}
