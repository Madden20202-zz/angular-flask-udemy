import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-orders',
  templateUrl: './pizza-orders.component.html',
  styleUrls: ['./pizza-orders.component.css']
})
export class PizzaOrdersComponent implements OnInit {

  @Input() pizza: any

  constructor() { }

  ngOnInit(): void {
  }

}
