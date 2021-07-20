import { Component } from '@angular/core';
import { element } from 'protractor';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent {
  

  constructor(private settingsService: SettingsService) { }

  ngAfterViewChecked(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme) {
    this.settingsService.changeTheme(theme);
  }

  
}
