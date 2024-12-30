import { Injectable } from '@angular/core';
import { OrderItem } from '../model/order-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  orderitems: OrderItem[] = [];

  constructor(private httpClient: HttpClient) { }

  // 1 - Get All Orders
    getAllOrderItems(): void
    {
      this.httpClient.get(environment.apiUrl + 'orderItems')
      .toPromise()
      .then((response?: any) =>{
        if(response.Value)
        {
          this.orderitems = response.Value;
          console.log(this.orderitems);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

}
