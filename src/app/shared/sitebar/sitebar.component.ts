import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/sidebar.service";

@Component({
  selector: 'app-sitebar',
  templateUrl: './sitebar.component.html',
  styles: [
  ]
})
export class SitebarComponent implements OnInit {

  menu : any[];

  constructor(private sidebarService: SidebarService) {
    this.menu = sidebarService.menu;
   }

  ngOnInit(): void {
  }

}
