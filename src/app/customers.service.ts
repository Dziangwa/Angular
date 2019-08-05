import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersUrl = 'api/customers';

  constructor(
    private http: HttpClient
  ) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customersUrl);
  }

  addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.customersUrl, customer)
  }

  deleteCustomer(customer: Customer | number): Observable<Customer>{
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url);
  }
}
