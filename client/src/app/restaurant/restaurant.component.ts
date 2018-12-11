import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Food } from '../classes/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  private _restaurant: Restaurant
  private _foods: Food[]

  constructor(
    private route: ActivatedRoute,
    private _restaurantsService: RestaurantService
  ) { }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._restaurant = await this._restaurantsService.getRestaurant(id)
    this._foods = this._restaurant.foods
  }

}
