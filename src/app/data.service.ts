import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'LAMBORGHINI', 'MINI-COOPER', 'AUDI', 'BMW', "JAGUAR"
  ];

  myData() {
    return "This is my data";
  }
}
