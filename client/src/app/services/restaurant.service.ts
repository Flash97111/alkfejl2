import { Injectable } from '@angular/core';
import { Restaurant } from '../classes/restaurant'
import { HttpService } from '../services/http.service'
import { AuthService } from '../services/auth.service'

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
}
