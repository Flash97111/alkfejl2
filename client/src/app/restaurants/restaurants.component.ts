import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  private _restaurants: Restaurant[]

  constructor(
    private _restaurantsService: RestaurantService
  ) { }

  async ngOnInit() {
    this._restaurants = await this._restaurantsService.getRestaurants()
  }

}
