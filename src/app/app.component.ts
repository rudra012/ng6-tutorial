import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1> Rudra! </h1>
  <p [class]="titleClass">Shailesh</p>
  <p [class.pink-title]="titleClassFalse">Shailesh</p>
  <p [class.yellow-title]="titleClass">Shailesh</p>
  <p [ngClass]="titleClasses">Shailesh Rudra</p>

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
export class AppComponent {
  title = 'app';

  titleClass = "green-title";
  titleClassFalse = true;
  // titleClassFalse = false;

  titleClasses = {
    'red-title': true,
    'large-title': true
  }
}
