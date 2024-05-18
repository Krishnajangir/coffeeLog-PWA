import { Component } from '@angular/core';
import { Coffee } from '../coffee-logic/coffee';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list: Coffee[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.list = this.dataService.getList();
  }

  goToDetails(coffee: Coffee) {
   this.router.navigate(["/coffee", coffee._id])
  }

}
