import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Éttermek';

  constructor (
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (window.localStorage.getItem('token')) {
      this.authService.loginWithToken();
    }
  }
}
