import { Injectable } from '@angular/core';
import { Coffee } from './coffee-logic/coffee';
import { PlaceLocation } from './coffee-logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList() {
    const list = [
      new Coffee('1', 'Double Espresso', 'cafe Tortoni', new PlaceLocation("Av. de mayo 600", "Buenos Aires")),
      new Coffee('2','Double Espresso 1', 'cafe Tortoni 1', new PlaceLocation("Av. de mayo 600 1", "Buenos Aires 1")),
      new Coffee('3','Double Espresso 2', 'cafe Tortoni 2', new PlaceLocation("Av. de mayo 600 2", "Buenos Aires 2")),
    ];
    return list;
  }
}
