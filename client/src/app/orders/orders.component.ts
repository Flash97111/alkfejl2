import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Ordered } from '../classes/ordered';
import { UserService } from '../services/user.service';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private _myOrders: Ordered[]
  private n: number
  private all: boolean = false


  constructor(
    private auth: AuthService,
    private userService: UserService,
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const username: String = this.route.snapshot.paramMap.get('username');
    if(username != null) {
      this._myOrders = await this.userService.getMyOrders(username)
    }
    else {
      this.all = true
      this._myOrders = await this.userService.getOrders()
    }
    this.n = this._myOrders.length
  }

  private async delete(id: number) {
    if(confirm("Biztosan torli a rendelest?")){
      window.location.reload()
      this.httpService.delete<Ordered>("orders/" + id);
    }  
  }
}
