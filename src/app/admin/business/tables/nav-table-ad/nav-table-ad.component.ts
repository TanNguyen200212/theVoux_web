import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-table-ad',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './nav-table-ad.component.html',
  styleUrls: ['./nav-table-ad.component.css']
})
export class NavTableAdComponent {

}
