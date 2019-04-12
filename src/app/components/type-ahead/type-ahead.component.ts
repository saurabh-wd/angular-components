import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../../services/shared-service.service';
import { mergeMap, flatMap, concatMap, switchMap, exhaustMap,filter,tap} from 'rxjs/operators';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {

  constructor(public sharedService : SharedServiceService) { }

  ngOnInit() {
  }

  textChange(){
  	var data = this.sharedService.gettypeAheadData().pipe(
  		exhaustMap(res =>res.json()))
  	.subscribe(res => console.log(res));
  }
}
