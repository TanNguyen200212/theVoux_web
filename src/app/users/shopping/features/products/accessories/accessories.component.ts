import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
})
export class AccessoriesComponent {}
