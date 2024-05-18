import { Component } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

import { FormsModule } from '@angular/forms';
import { Coffee } from '../coffee-logic/coffee';
import { GeolocationService } from '../geolocation.service';
import { TestingRating } from '../coffee-logic/TestingRating';

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule,
     FormsModule,MatSelectModule, MatInputModule,
     MatIconModule,
     MatSliderModule, MatSlideToggleModule
    ],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.scss'
})
export class CoffeeComponent {
  coffee = new Coffee();
  types = [
    "Espresso", "Ristretto", 'Americano', "Cappuccino",
    "Frapee"
  ];
  tastingEnabled: boolean = false;

  constructor(private locationService: GeolocationService) {}

  tastingRatingChanged(checked: boolean) {
    if(checked) {
      this.coffee.testingRating = new TestingRating();
    } else {
      this.coffee.testingRating = null;
    }
  }
  cancel() {}
  save() {}
  accuireLocation() {
  this.locationService.requestLocation((location: GeolocationCoordinates | null) => {
    if(location) {
      this.coffee.location!.latitude = location.latitude;
      this.coffee.location!.longitude = location.longitude;
    }
  })
  }
}
