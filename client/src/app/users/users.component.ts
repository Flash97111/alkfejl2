import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _users: User[]

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    this._users = await this.userService.getUsers()
  }

  private async delete(id: number) {
    if(confirm("Biztosan törli a felhasználót?")){
      window.location.reload()
      this.userService.delete(id);
    }  
  }

  private async perm(user: User) {
     
    if( user.role == "ROLE_ADMIN") {
      if(confirm("Biztosan lefokozza a felhasználót?")){
        this.userService.toUser(user)
        window.location.reload()
      } 
    }
    else {
      if(confirm("Biztosan adminná teszi a felhasználót?")){
        this.userService.toAdmin(user)
        window.location.reload()
      } 
    }
  }

}
