import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';
import { LoginComponent } from './components/login/login.component';
import { ChartModule}  from 'angular-highcharts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WijmoGridComponent } from './components/wijmo-grid/wijmo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeAheadComponent,
    LoginComponent,
    LineChartComponent,
    WijmoGridComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    WjGridModule,
    WjChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
