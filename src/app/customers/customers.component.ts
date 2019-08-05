import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(
    private customerService: CustomersService,
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void{
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

}
