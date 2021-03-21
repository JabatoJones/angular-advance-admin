import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SitebarComponent } from './sitebar/sitebar.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SitebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BreadcrumbsComponent,
    SitebarComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
