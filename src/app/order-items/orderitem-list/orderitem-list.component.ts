import { Component, OnInit } from '@angular/core';
import { OrderItemService } from 'src/app/shared/service/order-item.service';

@Component({
  selector: 'app-orderitem-list',
  templateUrl: './orderitem-list.component.html',
  styleUrls: ['./orderitem-list.component.scss']
})
export class OrderitemListComponent implements OnInit {

  constructor(public orderItemService: OrderItemService) { }

  ngOnInit(): void {
    console.log("OrderItem List Component...");
    this.orderItemService.getAllOrderItems();
  }

}
