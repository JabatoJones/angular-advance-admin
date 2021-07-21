import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public titulosSubs$: Subscription;

  constructor(private router: Router , private route : ActivatedRoute) {
    this.titulosSubs$ = this.getArgumentosRuta()
                              .subscribe((data) => {
                                this.titulo = data.titulo;
                                document.title = `AdminPro-${data.titulo}`
                              });
  }


  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      )
  }

  ngOnDestroy(): void {
    this.titulosSubs$.unsubscribe();
  }

}
