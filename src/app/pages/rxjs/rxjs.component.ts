import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervaloSubs : Subscription;

  constructor() {
    // this.retornaObservable()
    //   .pipe(
    //     //Numero de intentos del rety
    //     retry(2)
    //   )
    //   .subscribe(
    //     valor => console.log("Subs: ", valor),
    //     error => console.warn("Error: ", error),
    //     () => console.log("Obs$ Completado")
    //   );
    this.intervaloSubs = this.retornaIntervalo()
      .subscribe(console.log)
    // .subscribe((valor)=>console.log(valor))
  }
  

  retornaIntervalo(): Observable<number> {
    return interval(100)
      .pipe(
        // take(10),
        filter ( (valor)=> valor % 2 == 0),
        //map(valor => valor + 1)
      )
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    // const obs$: Observable<number> = new Observable(observer => {
    return new Observable(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i == 2) {
          observer.error("i llego a 2");
          // Reinicia el contador i = -1 ;
        }
      }, 1000)
    });

    // return obs$;
  }

  ngOnDestroy(): void {
    this.intervaloSubs.unsubscribe();
  }

}
