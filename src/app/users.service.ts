
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './users';
 
// @Injectable({
//   providedIn: 'root',
// })
// export class UsersService {
//   private apiUrl = 'http://localhost:3000/customers';
 
//   constructor(private http: HttpClient) {}
 
//   // Insert a new customer
//   signUp(user: User): Observable<User> {
//     return this.http.post<User>(this.apiUrl, user);
//   }
 
//   // Get all customers
 

//   updateCustomer(id: number, user: User): Observable<User> {
//   return this.http.put<User>(`${this.apiUrl}/${id}`, user);
// }
// getCustomers(id: number): Observable<User> {
//   return this.http.get<User>(`${this.apiUrl}/${id}`);
// }


// }

// src/app/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders'; // Assuming a `orders.db`

  constructor(private http: HttpClient) {}

  getOrders(customerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?customerId=${customerId}`);
  }
}