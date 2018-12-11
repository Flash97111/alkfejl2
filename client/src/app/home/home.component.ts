import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _restaurants: Restaurant[]

  constructor(
    private _restaurantsService: RestaurantService
  ) { }

  async ngOnInit() {
    this._restaurants = await this._restaurantsService.getRestaurants()
  }

}
