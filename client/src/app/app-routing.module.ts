import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantComponent } from './restaurant/restaurant.component'
import { LoginComponent } from './login/login.component'
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component'
import { UsersComponent } from './users/users.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { AuthGuard } from './auth.guard';


const routes: Route[] = [
  { path: '', component:  HomeComponent},
  { path: 'restaurants', component:  RestaurantsComponent},
  { path: 'restaurants/:id', component:  RestaurantComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'orders/my/:username', component:  OrdersComponent, canActivate: [AuthGuard], data: {role: 'ROLE_USER'}},
  { path: 'register', component: RegisterComponent},
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], data: {role: 'ROLE_ADMIN'}},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard], data: {role: 'ROLE_ADMIN'}},
  { path: 'new-restaurant', component: RestaurantFormComponent, canActivate: [AuthGuard], data: {role: 'ROLE_ADMIN'}},
  { path: 'new-food', component: FoodFormComponent, canActivate: [AuthGuard], data: {role: 'ROLE_ADMIN'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
