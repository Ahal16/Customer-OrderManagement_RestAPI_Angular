import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Customer } from '../model/customer';
import { OrderItem } from '../model/order-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  //declare variables
  //List 
  orders: Order[] = []; 
  customers: Customer[] = [];
  orderitems: OrderItem[] = [];
  
  //Constructor injection-dependency injection
  //DI: httpClient
  constructor(private httpClient: HttpClient) { }

  // 1 - Get All Orders
  getAllOrders(): void
  {
    this.httpClient.get(environment.apiUrl + 'orders')
    .toPromise()
    .then((response?: any) =>{
      if(response.Value)
      {
        this.orders = response.Value;
        console.log(this.orders);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

}
