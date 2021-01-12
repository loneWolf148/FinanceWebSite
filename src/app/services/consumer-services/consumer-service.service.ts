import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { ICard } from 'src/app/models/consumer-models/icard';
import { IPurchasedProducts } from 'src/app/models/consumer-models/ipurchasedproducts';
import { ICredit } from 'src/app/models/consumer-models/icredit';
import { IRecentTransactions } from 'src/app/models/consumer-models/irecenttransactions';

@Injectable({
  providedIn: 'root'
})
export class ConsumerServiceService {
  private url = 'http://localhost/Finance/api/';
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  GetCardDetails(username: string): Observable<ICard> {
    return this.http.get<ICard>(this.url + 'dashboard/GetCardDetails/' + username).pipe(catchError(this.HandleError))
  }

  GetCreditDetails(username: string): Observable<ICredit> {
    return this.http.get<ICredit>(this.url + 'dashboard/GetCreditDetails/' + username).pipe(catchError(this.HandleError));
  }

  GetPurchasedProducts(username: string): Observable<IPurchasedProducts> {
    return this.http.get<IPurchasedProducts>(this.url + 'dashboard/GetPurchasedProducts/' + username).pipe(catchError(this.HandleError));
  }

  GetRecentTransactions(username: string): Observable<IRecentTransactions> {
    return this.http.get<IRecentTransactions>(this.url + 'dashboard/GetRecentTransactions/' + username).pipe(catchError(this.HandleError));
  }

  private HandleError(error: HttpErrorResponse) {
    const errorMessage = error.error.Message || "Server Fault";
    return throwError(errorMessage);
  }
}
