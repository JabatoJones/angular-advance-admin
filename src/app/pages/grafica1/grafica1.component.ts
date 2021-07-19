import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public leyenda1 = "Ventas";
  public labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: Array<any> = [
    [350, 450, 100]
  ];

  public leyenda2 = "Compras";
  public labels2 = ['Dinero Invertido', 'Ganancias', 'Perdidas'];
  public data2: Array<any> = [
    [100 , 10, 430]
  ];
}
