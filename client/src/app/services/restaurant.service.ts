import { Injectable } from '@angular/core';
import { Restaurant } from '../classes/restaurant'
import { HttpService } from '../services/http.service'
import { AuthService } from '../services/auth.service'
import { Food } from '../classes/food';
import { Ordered } from '../classes/ordered';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private route: string = "restaurants";

  constructor(
    private authService: AuthService,
    private httpService: HttpService
  ) { }

  public getRestaurants() : Promise<Restaurant[]> {
    return this.httpService.get<Restaurant[]>(this.route);
  }

  public getRestaurant(id: number) : Promise<Restaurant> {
    return this.httpService.get<Restaurant>(this.route + "/" + id);
  }

  public postOrder(order: Ordered) {
    this.httpService.post<Ordered>("orders/new", order)
  }

  public delete(id: number) {
    this.httpService.delete<Restaurant>(this.route + "/" + id)
  }

  public deleteFood(id: number) {
    this.httpService.delete<Food>("foods/" + id)
  }

  public getFoods(): Promise<Food[]> {
    return this.httpService.get<Food[]>("foods")
  }

  public addFood(rid: number, food: Food) {
    this.httpService.put<Restaurant>("restaurants/"+rid+"/", food);
  }

  public delFood(rid: number, food: Food) {
    this.httpService.put<Restaurant>("restaurants/"+rid+"/"+food.id, food);
  }


  public new(restaurant: Restaurant): Promise<Restaurant> {
    return this.httpService.post<Restaurant>("restaurants", restaurant)
  }

  public newFood(food: Food) {
    this.httpService.post<Food>("foods", food)
  }
}
