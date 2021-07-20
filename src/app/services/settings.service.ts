import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector("#theme");

  constructor() {
    console.log("Settings Service Init");
    const theme = localStorage.getItem("theme")
    if (theme) {
      this.changeTheme(theme);
    }
    this.checkCurrentTheme();
  }

  changeTheme(theme) {
    const url = `/assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute("href", url);
    this.setStorage("theme", theme);
  }
  setStorage(name, value) {
    localStorage.setItem(name, value);
  }
  checkCurrentTheme() {
    const links : NodeListOf<Element> = document.querySelectorAll(".selector");
    links.forEach(element => {
      element.classList.remove(`working`);
      const btnTheme = element.getAttribute(`data-theme`);
      //const btnThemeUrl = `/assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (currentTheme.includes(`${btnTheme}.css`)) {
        element.classList.add('working');
      }
    });
  }
}
