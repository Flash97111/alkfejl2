import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  private _restaurants: Restaurant[]

  constructor(
    private _restaurantsService: RestaurantService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    this._restaurants = await this._restaurantsService.getRestaurants()
  }

  private async delete(id: number) {
    if(confirm("Biztosan törli az éttermet?")){
      window.location.reload()
      this._restaurantsService.delete(id);
    }  
  }

}
