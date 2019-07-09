import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state('green', style({
        'background-color': 'green',
        'height': '100px',
        'transform': 'translateX(0)',
      })),
      state('red', style({
        'background-color': 'red',
        'height': '50px',
        'transform': 'translateX(100%)',
      })),
      transition('green => red', animate(1000)),
      transition('red -> green', animate(1000)),
    ])
  ]
})
export class AppComponent{

  squareState: string;
  title = 'taskmgr';
  darkTheme = false;

  constructor(
    private oc: OverlayContainer
  ){}

  switchTheme(dark) {
    this.darkTheme = dark;
    this.oc.getContainerElement().classList.add(dark ? 'myapp-dark-theme' : null);
  }

  onClick() {
    this.squareState = this.squareState == 'red' ? 'green' : 'red';
  }


}
