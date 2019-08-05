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
}
