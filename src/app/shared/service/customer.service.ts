import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  //List
  customers: Customer[] = [];

  constructor(private httpClient: HttpClient) { }

  // 1 - Get All Orders
    getAllCustomers(): void
    {
      this.httpClient.get(environment.apiUrl + 'customers')
      .toPromise()
      .then((response?: any) =>{
        if(response.Value)
        {
          this.customers = response.Value;
          console.log(this.customers);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

}
