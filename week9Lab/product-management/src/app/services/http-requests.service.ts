
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';
const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  url = 'http://localhost:3000/api/'

  constructor(
    private http: HttpClient,
  ) { }

  createProduct(product: Product): Observable<any> {
    const bodyData = { name: product.Name, description: product.Description, price: product.Price, units: product.units }
    return this.http.post(this.url + 'product', bodyData, httpOptions)
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url + 'products', httpOptions)
  }




}
