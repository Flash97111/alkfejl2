import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Ordered } from '../classes/ordered'
import { HttpService } from '../services/http.service'
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public orders: Ordered[]

  private route: string = "users";

  constructor(
    private httpService: HttpService
  ) { }

  public getUsers() : Promise<User[]> {
    return this.httpService.get<User[]>(this.route);
  }

  public async getOrders(user: User) : Promise<Ordered[]> {
     this.orders = await this.httpService.get<Ordered[]>("orders");
     for(let i=0; i<this.orders.length; i++){
      if(this.orders[i].user != user) {
        this.orders.splice(i,1)
      }
     }
     return this.orders
  }
  
}
