import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() leyenda: String;
  @Input() doughnutChartData : MultiDataSet;
  @Input() labels: [];
  @Input() data :  Array<any>;

  public colors: Color[] = [{
    backgroundColor :[ '#6857E6','#009FEE','#F02059']
  }]

}
