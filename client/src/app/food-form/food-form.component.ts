import { Component, OnInit } from '@angular/core';
import { Food } from '../classes/food';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  private message = '';
  private food = new Food()

  private loginForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    image: ['', Validators.required],
    desc: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
  }

  private async onSubmit() {

    this.food.name = this.loginForm.get('name').value;
    this.food.price = this.loginForm.get('price').value;
    this.food.image = this.loginForm.get('image').value;
    this.food.description = this.loginForm.get('desc').value;

    try {
      await this.restaurantService.newFood(this.food)
      this.router.navigate(['/']);
    } catch (e) {
      this.message = 'Sikertelen felvétel!';
    }
  }

}
