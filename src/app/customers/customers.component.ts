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

  values = '';

  onKeyUp(event: KeyboardEvent): void{
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  add(name: string): void{
    this.customerService.addCustomer({ name } as Customer)
      .subscribe(customer => this.customers.push(customer));
  }

  delete(customer: Customer): void{
    this.customers = this.customers.filter(h => h !==customer);
    this.customerService.deleteCustomer(customer).subscribe();
  }

}
