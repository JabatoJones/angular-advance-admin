import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [{
        titulo: 'Main',
        url: '',
      },
      {
        titulo: 'ProgressBar',
        url: 'progress',
      },
      {
        titulo: 'Graficas',
        url: 'grafica1',
      },
      {
        titulo: 'Rxjs',
        url: 'rxjs',
      },
      {
        titulo: 'Promesas',
        url: 'promesas',
      }
      ]
    }
  ]

  constructor() {
    this.menu[0].submenu.sort(((a, b) => {
      if (a.titulo > b.titulo) {
        return 1;
      }
      if (a.titulo < b.titulo) {
        return -1;
      }
      return 0;
    }));
  }
}
