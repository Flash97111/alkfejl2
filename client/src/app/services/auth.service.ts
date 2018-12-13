import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { UserService } from './user.service'
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean = false;
  public user: User = null;
  private users: User[];
  private cred: String;

  constructor(
    private httpService: HttpService,
    private userService: UserService,
    private router: Router
  ) {  }

  public async login(username: string, password: string): Promise<User> {
    try {
      const token = btoa(username + ':' + password);
      this.cred = username + ':' + password;
      window.localStorage.setItem('token', token);
          const user: User = await this.httpService.post('users/login', this.cred) as User;
          if(user == null) {
            window.localStorage.setItem('token', '');
            return Promise.reject();
          }
          this.isLoggedIn = true;
          this.user = user;
          console.log(user);
          return Promise.resolve(user);
    } catch (e) {
      window.localStorage.setItem('token', '');
      console.error(e);
      return Promise.reject();
    }
  }

  public logout() {
    this.isLoggedIn = false;
    this.user = null;
    window.localStorage.setItem('token', '');
    this.router.navigate(['']);
  }

  public loginWithToken() {
    const token = window.localStorage.getItem('token');
    const [username, password] = atob(token).split(':');
    this.login(username, password);
  }
}