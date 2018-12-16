import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private message = '';
  private user = new User()

  private loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  private async onSubmit() {

    this.user.username = this.loginForm.get('username').value;
    this.user.password = this.loginForm.get('password').value;
    this.user.address = this.loginForm.get('address').value;
    this.user.phone = this.loginForm.get('phone').value;

    try {
      await this.userService.register(this.user)
      await this.authService.login(this.user.username, this.user.password)
      this.router.navigate(['/']);
    } catch (e) {
      this.message = 'Sikertelen regisztracio!';
    }
  }

}
