import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Food } from '../classes/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ordered } from '../classes/ordered';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  private _restaurant: Restaurant
  private _foods: Food[]
  private tmp: Food[]
  private order = new Ordered()
  private addMode: boolean = false

  constructor(
    private fb: FormsModule,
    private route: ActivatedRoute,
    private authService: AuthService,
    private _restaurantsService: RestaurantService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._restaurant = await this._restaurantsService.getRestaurant(id)
    this._foods = this._restaurant.foods
  }

  onSubmit(event: any, food: Food) {
    const qty = event.target.player.value;
      if(confirm("Biztos rendel " + qty + " adagot?")){
        this.order.food = food
        this.order.qty = qty
        this.order.restaurant = this._restaurant
        this.order.user = this.authService.user
        var day = new Date().toLocaleDateString()
        var hour = new Date().toLocaleTimeString()
        this.order.time = day + " " + hour
        this._restaurantsService.postOrder(this.order)
        this.router.navigate(['/orders/my/'+this.authService.user.username]);
        window.location.reload()
    }
    
  }

  private async delete(id: number) {
    if(confirm("Biztosan törli az ételt?")){
      window.location.reload()
      this._restaurantsService.deleteFood(id);
    }  
  }

  private async deleteLocal(food: Food) {
    if(confirm("Biztos törli az ételt az étteremből?")){
      await this._restaurantsService.delFood(this._restaurant.id, food)
      this.addMode = false
      window.location.reload()
    }
    
  }

  private async add() {
    this.addMode = true
    this.tmp = await this._restaurantsService.getFoods();
    for(var i=0; i<this.tmp.length; i++) {
      for(var j=0; j<this._foods.length; j++) {
        if(this.tmp[i].id == this._foods[j].id) {
          this.tmp.splice(i,1)
        }
      }
    }

    this._foods = this.tmp
    //window.location.reload()
  }

  private async addFood(food: Food) {
    await this._restaurantsService.addFood(this._restaurant.id, food)
    this.addMode = false
    window.location.reload()
  }
    
}
