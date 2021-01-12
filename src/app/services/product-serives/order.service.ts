import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IScheme } from '../../models/product-models/IScheme';
import { IOrder } from '../../models/product-models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiBaseUrl = "http://localhost/Finance/api/Product";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getEmiSchemes(): Observable<IScheme[]> {
    const requestUrl = `${this.apiBaseUrl}/GetEmiSchemes/`;
    return this.http.get<IScheme[]>(requestUrl);
  }

  getMonthlyEmi(productId: number, schemeNo: number): Observable<number> {
    const requestUrl = `${this.apiBaseUrl}/GetMonthlyEmi/${productId}?schemeNo=${schemeNo}`;
    return this.http.get<number>(requestUrl).pipe(catchError(this.handleError));
  }

  placeOrder(newOrder: IOrder): Observable<string> {
    const requestUrl = `${this.apiBaseUrl}/PlaceOrder/`;
    return this.http.post<string>(requestUrl, newOrder, this.httpOptions).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    const errorMessage = error.error.Message || "Server Fault";
    return throwError(errorMessage);
  }
}