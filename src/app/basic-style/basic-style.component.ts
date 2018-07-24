import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-style',
//  templateUrl: './basic-style.component.html',
//  styleUrls: ['./basic-style.component.scss']
  template: `
    <h1> Rudra! </h1>
    <p [class]="titleClass">Shailesh</p>
    <p [class.pink-title]="titleClassFalse">Shailesh</p>
    <p [class.yellow-title]="titleClass">Shailesh</p>
    <p [ngClass]="titleClasses">Shailesh Rudra</p>


    <h1 [style.color]="titleClassFalse ? 'green' : 'red'"> Rudra! </h1>
    <h1 [ngStyle]="titleStyles"> Rudra! </h1>

  `,
  styles: [`
    h1 {
      text-declaration: uderline;
      color: red;
    }

    .green-title {
      color: green;
    }

    .yellow-title {
      color: yellow;
    }

    .pink-title {
      color: pink;
    }

    .large-title {
      font-size: 4em;
    }
  `]

})
export class BasicStyleComponent implements OnInit {
  titleClass = 'green-title';
  titleClassFalse = true;
  // titleClassFalse = false;

  titleClasses = {
    'red-title': true,
    'large-title': true
  };

  titleStyles = {
    'color': 'red',
    'font-size': '4em'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
