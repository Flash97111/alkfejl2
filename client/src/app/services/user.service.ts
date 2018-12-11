import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _USER: User[] = [
    {
      id: 1,
      username: "admin",
      password: "$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu",
      address: "asd",
      tel: "06302037222",
      role: "ROLE_ADMIN",
    } as User,
    {
      id: 1,
      username: "user",
      password: "$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu",
      address: "useraddress",
      tel: "06302037222",
      role: "ROLE_USER",
    } as User
  ];

  constructor() { }

  public getUsers() : User[] {
    return this._USER;
  }

  public getUser(id: number) : User {
    for (let user of this._USER) {
      if (user.id == id) {
        return user;
      }
    }
  }
  
}
