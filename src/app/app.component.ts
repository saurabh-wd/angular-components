import { Component } from '@angular/core';
import {TypeAheadComponent} from './components/type-ahead/type-ahead.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  protected data = [1, 2, 3];
  display(msg){
	console.log(msg);
  }
}
