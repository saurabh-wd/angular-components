import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

@Input() data : any;
@Output() ctop : any =new EventEmitter();


chart:Chart;
 
public ngOnInit() {
  this.chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: this.data
      }
    ]
  });
 
  // add point to chart serie
  
  
  }
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
    this.ctop.emit('done it successfully');
  }

}
