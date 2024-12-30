import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    console.log("Order List Component...");
    this.orderService.getAllOrders();
  }

}
