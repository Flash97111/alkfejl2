import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private message = '';

  private loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private async onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    try {
      await this.authService.login(username, password);
      this.router.navigate(['/']);
    } catch (e) {
      this.message = 'Sikertelen bejelentkezés!';
    }
  }

}