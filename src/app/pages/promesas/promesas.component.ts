import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario()
      .then(usuarios => { 
        console.log(usuarios);
      })
  }

  getUsuario() {
    return new Promise(resolve => {
      fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(body => resolve(body.data))
    });
  }

}
