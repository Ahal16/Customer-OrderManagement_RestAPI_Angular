import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderItemsRoutingModule } from './order-items-routing.module';
import { OrderItemsComponent } from './order-items.component';
import { OrderitemListComponent } from './orderitem-list/orderitem-list.component';


@NgModule({
  declarations: [
    OrderItemsComponent,
    OrderitemListComponent
  ],
  imports: [
    CommonModule,
    OrderItemsRoutingModule
  ]
})
export class OrderItemsModule { }
