import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <p>{{ someProperty }}</p>

  <p [@myAwsomeAnimation]='state' (click)="animateMe()"> I will animate </p>
  `,
  styles: [`
  p {
    width: 200px;
    background: lightgray;
    margin: 100px auto;
    text-align:centre;
    padding:20px;
    font-size:1.5em
  }
  `],

  animations:[
    trigger('myAwsomeAnimation', [
      
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.5)'
      })),
    
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'transateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'transateY(35px)', offset: .5}),
        style({opacity: 1, transform: 'transateY(0)', offset: 1}),
      ])
      ))
      // transition('small <=> large', animate('300ms ease-in', style({
      //     transform: 'translateY(100px)'
      //   })
      // ))

    ]),    
  ]
})
export class AppComponent {

  state: string = 'small';

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small')
  }

  constructor(private dataService: DataService){

  }

  someProperty:string = '';

  ngOnInit() {
      console.log(this.dataService.cars);
      this.someProperty = this.dataService.myData();
  }
}
