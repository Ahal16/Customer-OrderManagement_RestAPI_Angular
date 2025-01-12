import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    console.log("Customer List Component...");
    this.customerService.getAllCustomers();
  }

}
