import {Customer} from "./customer";
import {OrderItem} from "./order-item";

export class Order {
    OrderId: number = 0 ;
    OrderDate: Date = new Date();
    CustomerId: number = 0 ;
    OrderItemId: number = 0 ;

    customer : Customer = new Customer();
    orderItem : OrderItem = new OrderItem();
}
