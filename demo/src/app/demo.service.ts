import { Products } from './products';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private baseUrl = 'http://localhost:9191/';

  constructor(private http: HttpClient) {}

  getProdcut(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  getProdcutList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createProduct(data: {
    name: string;
    quantity: number;
    price: number;
  }): Observable<object> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateProduct(data: {
    name: string;
    quantity: number;
    price: number;
  }): Observable<object> {
    return this.http.put<object>(`${this.baseUrl}update`, data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`);
  }
}
