import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Orders';

  pizzaOrders: any
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getPizzaOrder()
  }
  
  getPizzaOrder(): any {
    this.api.getPizzaOrder().subscribe((data)=> {
      this.pizzaOrders = data
    })
  }
}
