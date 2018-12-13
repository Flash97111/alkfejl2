import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule,MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatTableModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule } from '@angular/material';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantsComponent,
    NavbarComponent,
    LoginComponent,
    RestaurantComponent,
    OrdersComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule, 
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
