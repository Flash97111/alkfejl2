import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantComponent } from './restaurant/restaurant.component'
import { LoginComponent } from './login/login.component'


const routes: Route[] = [
  { path: '', component:  HomeComponent},
  { path: 'restaurants', component:  RestaurantsComponent},
  { path: 'restaurants/:id', component:  RestaurantComponent},
  { path: 'login', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
