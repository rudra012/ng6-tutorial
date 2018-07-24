import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cars = [
    'LAMBORGHINI', 'MINI-COOPER', 'AUDI', 'BMW', 'JAGUAR'
  ];

  constructor() {
  }

  myData() {
    return 'This is my data';
  }
}
