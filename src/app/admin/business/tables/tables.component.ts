import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavTableAdComponent } from "./nav-table-ad/nav-table-ad.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule , RouterModule,RouterOutlet, NavTableAdComponent],
  templateUrl: './tables.component.html',
  styleUrls:[ './tables.component.css'],
})
export default class TablesComponent {

}
