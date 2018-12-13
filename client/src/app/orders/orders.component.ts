import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Ordered } from '../classes/ordered';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private _myOrders: Ordered[]


  constructor(
    private auth: AuthService,
    private userService: UserService
  ) { }

  async ngOnInit() {  
    this._myOrders = await this.userService.getOrders(this.auth.user)
  }

}
