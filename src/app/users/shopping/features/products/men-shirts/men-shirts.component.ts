import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-men-shirts',
  standalone: true,
  imports: [CommonModule,RouterModule
  ],
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css']
})
export class MenShirtsComponent {

}
