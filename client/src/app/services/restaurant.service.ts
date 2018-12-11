import { Injectable } from '@angular/core';
import { Restaurant } from '../classes/restaurant'
import { HttpService } from '../services/http.service'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private route: string = "restaurants";

  constructor(
    private httpService: HttpService
  ) { }

  public getRestaurants() : Promise<Restaurant[]> {
    return this.httpService.get<Restaurant[]>(this.route);
  }

  public getRestaurant(id: number) : Promise<Restaurant> {
    return this.httpService.get<Restaurant>(this.route + "/" + id);
  }
}
