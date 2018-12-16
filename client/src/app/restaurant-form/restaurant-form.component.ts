import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  private message = '';
  private restaurant = new Restaurant()

  private loginForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required]
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

    this.restaurant.name = this.loginForm.get('name').value;
    this.restaurant.address = this.loginForm.get('address').value;
    this.restaurant.phone = this.loginForm.get('phone').value;

    try {
      this.restaurant = await this.restaurantService.new(this.restaurant)
      this.router.navigate(['restaurants/' + this.restaurant.id]);
    } catch (e) {
      this.message = 'Sikertelen felvétel!';
    }
  }

}
