import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public data: Array<any>;
  constructor() {
  this.data = [
  {
  	"id" : 12,
  	"name": 'rahul'
  },
  {
  	"id" : 13,
  	"name": 'sonur'
  }
  ] 

  }

 gettypeAheadData() : Observable<any>{
  	return of(this.data);
  } 
}
