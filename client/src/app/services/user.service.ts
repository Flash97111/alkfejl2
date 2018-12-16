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

  public async delete(id: number) {
    await this.httpService.delete<User>(this.route + "/" + id);
  }

  public async toUser(user: User) {
    await this.httpService.put<User>(this.route + "/" + user.id, user);
  }

  public async toAdmin(user: User) {
    await this.httpService.put<User>(this.route + "/admin/" + user.id, user);
  }

  public async getMyOrders(username: String) : Promise<Ordered[]> {
     this.orders = await this.httpService.get<Ordered[]>("orders/my/" + username);
     return this.orders
  }

  public async getOrders() :  Promise<Ordered[]> {
    this.orders = await this.httpService.get<Ordered[]>("orders");
    return this.orders
 }

  public async register(user: User) {
    await this.httpService.post<User>("users/register",user);
 }
  
}
