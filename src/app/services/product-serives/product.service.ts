import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IProduct } from '../../models/product-models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiBaseUrl = "http://localhost/Finance/api/Product";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    const requestUrl = `${this.apiBaseUrl}/GetProducts/`;
    return this.http.get<IProduct[]>(requestUrl).pipe(catchError(this.handleError));
  }

  getProduct(productId: number): Observable<IProduct> {
    const requestUrl = `${this.apiBaseUrl}/GetProduct/${productId}/`;
    return this.http.get<IProduct>(requestUrl).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    const errorMessage = error.error.Message || "Server Fault";
    return throwError(errorMessage);
  }
}
