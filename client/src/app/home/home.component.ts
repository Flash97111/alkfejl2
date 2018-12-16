import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Food } from '../classes/food';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _restaurants: Restaurant[]
  private _foods: Food[]
  private i: number = 0;
  private j: number = 0;

  constructor(
    private _restaurantsService: RestaurantService,
    private _httpService: HttpService
  ) { }

  async ngOnInit() {
    this._restaurants = await this._restaurantsService.getRestaurants()
    this._foods = await this._httpService.get<Food[]>("foods");
  }

  click() {
    if(this._restaurants.length == this.i+1) {
      this.i=0
    }
    else {
      this.i++;
    }   
  }

  click2() {
    if(0 == this.i) {
      this.i=this._restaurants.length-1
    }
    else {
      this.i--;
    }   
  }

  click3() {
    if(this._foods.length == this.j+1) {
      this.j=0
    }
    else {
      this.j++;
    }   
  }

  click4() {
    if(0 == this.j) {
      this.j=this._foods.length-1
    }
    else {
      this.j--;
    }   
  }

}
