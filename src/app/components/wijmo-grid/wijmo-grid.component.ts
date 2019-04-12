import { Component, OnInit } from '@angular/core';
import { CollectionView } from 'wijmo/wijmo';
@Component({
  selector: 'app-wijmo-grid',
  templateUrl: './wijmo-grid.component.html',
  styleUrls: ['./wijmo-grid.component.css']
})
export class WijmoGridComponent implements OnInit {

  	constructor() { 
	this.columns=[
      {header:"Country",binding:"country",visible:true},
      {header:"Sales",binding:"sales",visible:true},
      {header:"Expenses",binding:"expenses",visible:true},
      {header:"Downloads",binding:"downloads",visible:true}
    ];
  	}

	ngOnInit() {

	}
	columns;
	data = this.getData();
	  getData() {
	    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
	        data = [];
	    for (var i = 0; i < countries.length; i++) {
	      data.push({
	        country: countries[i],
	        sales: Math.random() * 10000,
	        expenses: Math.random() * 5000,
	        downloads: Math.round(Math.random() * 20000),
	      });
	    }
	    return new CollectionView(data);
	  }
	  
}
